import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://dev.ndhm.gov.in/gateway"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getV05Certs - Get certs for JWT verification
    **/
    getV05Certs(config?: AxiosRequestConfig): Promise<operations.GetV05CertsResponse>;
    /**
     * getV05Heartbeat - Get consent request status
    **/
    getV05Heartbeat(req: operations.GetV05HeartbeatRequest, config?: AxiosRequestConfig): Promise<operations.GetV05HeartbeatResponse>;
    /**
     * getV05WellKnownOpenidConfiguration - Get openid configuration
    **/
    getV05WellKnownOpenidConfiguration(config?: AxiosRequestConfig): Promise<operations.GetV05WellKnownOpenidConfigurationResponse>;
    /**
     * postV05CareContextsDiscover - Discover patient's accounts
     *
     * Request for patient care context discover, made by Gateway intended for a specific HIP. It is expected that HIP will subsequently return either zero or one patient record with (potentially masked) associated care contexts
     *   1. **At least one of the verified identifier matches**
     *   2. **Name (fuzzy), gender matches**
     *   3. **If YoB was given, age band(+-2) matches**
     *   4. **If unverified identifiers were given, one of them matches**
     *   5. **If more than one patient records would be found after aforementioned steps, then patient who matches most verified and unverified identifiers would be returned.**
     *   6. **If there would be still more than one patients (after ranking) error would be returned**
     *   7. **Intended HIP should be able to resolve and identify results returned in the subsequent link confirmation request via the specified transactionId**
     *   8. **Intended HIP should store the discovery results with transactionId and care contexts discovered for subsequent link initiation**
     *
    **/
    postV05CareContextsDiscover(req: operations.PostV05CareContextsDiscoverRequest, config?: AxiosRequestConfig): Promise<operations.PostV05CareContextsDiscoverResponse>;
    /**
     * postV05CareContextsOnDiscover - Response to patient's account discovery request
     *
     * Result of patient care-context discovery request at HIP end. If a matching patient found with zero or more care contexts associated, it is specified as result attribute. If the prior discovery request, resulted in errors then it is specified in the error attribute. Reasons of errors can be
     *   1. **more than one definitive match for the given request**
     *   2. **no verified identifer was specified**
     *
    **/
    postV05CareContextsOnDiscover(req: operations.PostV05CareContextsOnDiscoverRequest, config?: AxiosRequestConfig): Promise<operations.PostV05CareContextsOnDiscoverResponse>;
    /**
     * postV05ConsentsHipNotify - Consent notification
     *
     * Notification of consents to health information providers consent request granted, consent revoked, consent expired. Only the GRANTED and REVOKED status notifications will be sent to HIP.
     *   1. If consent is granted, status=GRANTED, then consentDetail contains the consent artefact details and signature is available.
     *   2. If consent is revoked, then status=REVOKED, and consentId specifes which consent artefact is revoked.
     *
    **/
    postV05ConsentsHipNotify(req: operations.PostV05ConsentsHipNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsHipNotifyResponse>;
    /**
     * postV05ConsentsHipOnNotify - Consent notification
     *
     * This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration.
     *
    **/
    postV05ConsentsHipOnNotify(req: operations.PostV05ConsentsHipOnNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsHipOnNotifyResponse>;
    /**
     * postV05HealthInformationHipOnRequest - Health information data request
     *
     * API called by HIP to acknowledge Health information request receipt. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.
     *
    **/
    postV05HealthInformationHipOnRequest(req: operations.PostV05HealthInformationHipOnRequestRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationHipOnRequestResponse>;
    /**
     * postV05HealthInformationHipRequest - Health information data request
     *
     * API called by CM to request Health information from HIP against a validated consent artefact. The transactionId is the correlation id that HIP should use use when pushing data to the **dataPushUrl**.
     *
    **/
    postV05HealthInformationHipRequest(req: operations.PostV05HealthInformationHipRequestRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationHipRequestResponse>;
    /**
     * postV05HealthInformationNotify - Notifications corresponding to events during data flow
     *
     * API called by HIU and HIP during data-transfer.
     * 1. HIP on transfer of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]
     * 2. HIP would also send **hiStatus** for each *careContextReference* - on of [DELIVERED, ERRORED]
     * 3. HIU on receipt of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]. For example, FAILED when if data was not sent or if invalid data was sent
     * 4. HIU would also send **hiStatus** for each *careContextReference* - one of [OK, ERRORED]
     *
    **/
    postV05HealthInformationNotify(req: operations.PostV05HealthInformationNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationNotifyResponse>;
    /**
     * postV05HealthInformationTransfer - health information transfer API
     *
     * **NOTE**: This API is actually the callback URL that is passed as **dataPushUrl** in the data request API - /v0.5/health-information/hip/request. This API is directly called by HIP Data Bridge and is not mediated via CM, and hence not routed through the Gateway.
     *   1. This API should be implemented at HIU side. It maybe implemented by the Data Bridge representing the HIU.
     *   2. Entry elements maybe ***content*** or ***link***, although for version 1, entry ***content*** is preferred.
     *   3. Entry ***content*** (or even link reference content) must be encrypted by means of Elliptic-curve Diffie–Hellman Key Exchange, utilizing the HIU keymaterials that are passed through the data request API - /v0.5/health-information/hip/request.
     *   4. Media contains the mimetype of content, and for v1, it is "application/fhir+json"
     *   5. checksum is Md5 checksum of the data conent, before encryption
     *   6. Please refer to the NDHM Sandbox Documentation for the format of FHIR bundle that is passed through content
     *
    **/
    postV05HealthInformationTransfer(req: operations.PostV05HealthInformationTransferRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationTransferResponse>;
    /**
     * postV05LinksLinkAddContexts - API for HIP initiated care-context linking for patient
     *
     * API to submit care-context to CM for HIP initiated linking. The API must accompany the "accessToken" fetched in the users/auth process.
     *   1. subsequent usage for accessToken may be invalid if it was meant for one-time usage or if it expired
     *
    **/
    postV05LinksLinkAddContexts(req: operations.PostV05LinksLinkAddContextsRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkAddContextsResponse>;
    /**
     * postV05LinksLinkConfirm - Token submission by Consent Manager for link confirmation
     *
     * API to submit the token that was sent by HIP during the link request.
     *
    **/
    postV05LinksLinkConfirm(req: operations.PostV05LinksLinkConfirmRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkConfirmResponse>;
    /**
     * postV05LinksLinkInit - Link patient's care contexts
     *
     * Request from Gateway to links care contexts associated with only one patient
     *   1. **Validate account reference number and care context reference number**
     *   2. **Validate transactionId in the request with discovery request entry to check whether there was a discovery
     *       and were these care contexts discovered or not for a given patient**
     *   3. **Before eventual link confirmation, HIP needs to authenticate the request with the patient(eg: OTP verification)**
     *   4. **HIP should communicate the mode of authentication of a successful request to Consent Manager**
     *
    **/
    postV05LinksLinkInit(req: operations.PostV05LinksLinkInitRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkInitResponse>;
    /**
     * postV05LinksLinkOnAddContexts - callback API for HIP initiated patient linking /link/add-context
     *
     * If the accessToken is valid for purpose of linking, and specified details provided, CM will send "acknoweldgement.status" as SUCCESS. If any error occcurred, for example invalid token, or other required patient or care-context information not provided, then "error" attribute conveys so.
     *   1. **accessToken must be valid and must be for the purpose of linking**
     *
    **/
    postV05LinksLinkOnAddContexts(req: operations.PostV05LinksLinkOnAddContextsRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkOnAddContextsResponse>;
    /**
     * postV05LinksLinkOnConfirm - Token authenticated by HIP, indicating completion of linkage of care-contexts
     *
     * Returns a list of linked care contexts with patient reference number.
     *   1. **Validated and linked account reference number**
     *   2. **Validated that the token sent from Consent Manager is same as the one generated by HIP**
     *   3. **Verified that same Consent Manager which made the link request is sending the token**
     *   4. **Results of unmasked linked care contexts with patient reference number**
     *
    **/
    postV05LinksLinkOnConfirm(req: operations.PostV05LinksLinkOnConfirmRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkOnConfirmResponse>;
    /**
     * postV05LinksLinkOnInit - Response to patient's care context link request
     *
     * Result of patient care-context link request from HIP end. This happens in context of previous discovery of patient found at HIP end, therefore the link requests ought to be in reference to the patient reference and care-context references previously returned by the HIP. The correlation of discovery and link request is maintained through the transactionId. HIP should have
     *   1. **Validated transactionId in the request to check whether there was a discovery done previously, and the link request corresponds to returned patient care care context references**
     *   2. **Before returning the response, HIP should have sent an authentication request to the patient(eg: OTP verification)**
     *   3. **HIP should communicate the mode of authentication of a successful request**
     *   4. **HIP subsequently should expect the token passed via /link/confirm against the link.referenceNumber passed in this call**
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     * The error section in the body, represents the potential errors that may have occurred. Possible reasons:
     *   1. **Patient reference number is invalid**
     *   2. **Care context reference numbers are invalid**
     *
    **/
    postV05LinksLinkOnInit(req: operations.PostV05LinksLinkOnInitRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkOnInitResponse>;
    /**
     * postV05PatientsProfileOnShare - Response to patient's share profile request
     *
     * Result of patient share profile request at HIP end.
     *
    **/
    postV05PatientsProfileOnShare(req: operations.PostV05PatientsProfileOnShareRequest, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsProfileOnShareResponse>;
    /**
     * postV05PatientsProfileShare - Share patient profile details
     *
     * Request for sharing patient's profile details to HIP
     *
    **/
    postV05PatientsProfileShare(req: operations.PostV05PatientsProfileShareRequest, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsProfileShareResponse>;
    /**
     * postV05PatientsSmsNotify - API for HIP to send SMS notifications to patients
     *
     * API to send SMS notifications to patient with custom deeplink.
     *
    **/
    postV05PatientsSmsNotify(req: operations.PostV05PatientsSmsNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsSmsNotifyResponse>;
    /**
     * postV05PatientsSmsOnNotify - Acknowledgment response for SMS notification sent to patient by HIP
     *
     * If the SMS notification is successfully sent to patient then "status" will be "ACKNOWLEDGED" with no error.
     * If the SMS notification is failed then "status" will be "ERRORED" with error.
     *
    **/
    postV05PatientsSmsOnNotify(req: operations.PostV05PatientsSmsOnNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsSmsOnNotifyResponse>;
    /**
     * postV05Sessions - Get access token
    **/
    postV05Sessions(req: operations.PostV05SessionsRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SessionsResponse>;
    /**
     * postV05UsersAuthConfirm - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
     *
     * This API is called by HIP/HIUs to confirm authentication of users. The transactionId returned by the previous callback API /users/auth/on-init must be sent. If Authentication is successful the callback API will send an "access token" for subsequent purpose specific API calls. Note only **credential.authCode** or **credential.demographic** should be sent
     *   1. demographic details are only required for  demographic auth as of now.
     *   2. demographic details are required only in MEDIATED cases and if the **auth.mode** so demands. e.g. if **auth.mode** is DEMOGRAPHICS. Usually for demographic authentication, the name, gender and DOB must be exactly as specified in User Account.
     *   3. demographic.identifier is optional, however maybe required if authentication so mandates.
     *   4. credential.authCode is required for other MEDIATED authentication like MOBILE_OTP, AADHAAR_OTP.
     *
    **/
    postV05UsersAuthConfirm(req: operations.PostV05UsersAuthConfirmRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthConfirmResponse>;
    /**
     * postV05UsersAuthFetchModes - Get a patient's authentication modes relevant to specified purpose
     *
     * This API is meant for identify supported authentication modes for a patient given a specific purpose
     *
    **/
    postV05UsersAuthFetchModes(req: operations.PostV05UsersAuthFetchModesRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthFetchModesResponse>;
    /**
     * postV05UsersAuthInit - Initialize authentication from HIP
     *
     * This API is called by HIPs to initiate authentication of users. A transactionId is retuned by the corresponding callback API for confirmation of user auth.
     *
    **/
    postV05UsersAuthInit(req: operations.PostV05UsersAuthInitRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthInitResponse>;
    /**
     * postV05UsersAuthNotify - notification API in case of DIRECT mode of authentication by the CM
     *
     * This API is called by CM to confirm authentication of users. The transactionId returned is same as that passed in /auth/on-init. The "auth.status" conveys whether the request was GRANTED or DENIED.
     *
     *   1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
     *   2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.
     *   3. The payload is conditional to the purpose of auth. If purpose specified in /auth/init is KYC or KYC_AND_LINK, then patient details are passed. **auth.accessToken** is passed only if the purpose is LINK or KYC_AND_LINK.
     *
    **/
    postV05UsersAuthNotify(req: operations.PostV05UsersAuthNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthNotifyResponse>;
    /**
     * postV05UsersAuthOnConfirm - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
     *
     * This API is called by CM to confirm authentication of users.
     *
     *   1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
     *   2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.
     *
    **/
    postV05UsersAuthOnConfirm(req: operations.PostV05UsersAuthOnConfirmRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthOnConfirmResponse>;
    /**
     * postV05UsersAuthOnFetchModes - Identification result for a consent-manager user-id
     *
     * If a patient is found then **auth** attribute contains the supported modes for the specified purpose.
     * Otherwise, error is raised for invalid requests or for non-existent id.
     * Note in addition to the "Authorization" header, one of the following headers must be specified
     * 1. **X-HIU-ID** if the requester is HIU (identified from /auth/fetch-modes requester.id)
     * 2. **X-HIP-ID** if the requester is HIP (identified from /auth/fetch-modes requester.id)
     *
    **/
    postV05UsersAuthOnFetchModes(req: operations.PostV05UsersAuthOnFetchModesRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthOnFetchModesResponse>;
    /**
     * postV05UsersAuthOnInit - Response to user authentication initialization from HIP
     *
     * If the patient's id is valid, CM will return a transactionId as initialization of user auth. If the request is valid, then 'auth.mode' will convey how the authentication should be done. The authentication can be *mediated* or *direct*. For mediated authentication modes, HIP or HIU is epected to send over relevant code (OTP/token) or demographic info via subsequent API call to /auth/confirm. for direct authentication case, CM will notify requester through/users/auth/notify API.
     *
     *   1. **auth.mode** conveys whats the mode of authentication is, and what is expected from HIP/HIU in the subsequent /auth/confirm API call. Possible values
     *       1. MOBILE_OTP - auth via OTP to registered mobile. Mediated.
     *       2. AADHAAR_OTP - auth initiated with Aadhaar with OTP. Mediated.
     *       3. DEMOGRAPHICS - auth initiated with demographic verification
     *       4. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS. In this case, the HIP/HIU is not expected to call subsequent /auth/confirm call. CM will do direct authentication with the User (e.g. Mobile App, SMS etc) and will notify requester
     *   2. **meta.expiry** conveys the expiry time of the token and the authentication session
     *   3. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     * The error section in the body, represents the potential errors that may have occurred. Possible reasons:
     *   1. Patient id is invalid
     *
    **/
    postV05UsersAuthOnInit(req: operations.PostV05UsersAuthOnInitRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthOnInitResponse>;
    /**
     * postV05UsersAuthOnNotify - callback API by HIU/HIPs as acknowledgement of auth notification
     *
     * This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication.
     *
    **/
    postV05UsersAuthOnNotify(req: operations.PostV05UsersAuthOnNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthOnNotifyResponse>;
}
export {};
