import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://dev.ndhm.gov.in/cm"];
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
     * getV05Heartbeat - Get consent request status
    **/
    getV05Heartbeat(config?: AxiosRequestConfig): Promise<operations.GetV05HeartbeatResponse>;
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
     * postV05ConsentRequestsInit - Create consent request
     *
     * Creates a consent request to get data about a patient by HIU user. CM should call Gateway - *** /v0.5/consent-requests/on-init*** API with the consent-request-id
    **/
    postV05ConsentRequestsInit(req: operations.PostV05ConsentRequestsInitRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentRequestsInitResponse>;
    /**
     * postV05ConsentRequestsStatus - Get consent request status
     *
     * Get status of consent request done previously. CM responds by calling Gateway API - *** /v0.5/consent-requests/on-status***
    **/
    postV05ConsentRequestsStatus(req: operations.PostV05ConsentRequestsStatusRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentRequestsStatusResponse>;
    /**
     * postV05ConsentsFetch - Get consent artefact
     *
     * This API is called when a HIU makes a request to get a consent artefact. For response please refer to the Gateway *** /v0.5/consents/on-fetch***
    **/
    postV05ConsentsFetch(req: operations.PostV05ConsentsFetchRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsFetchResponse>;
    /**
     * postV05ConsentsHipOnNotify - Consent notification
     *
     * This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration, notified by CM earlier via Gateway API - *** /v0.5/consents/hip/notify***.
     *
    **/
    postV05ConsentsHipOnNotify(req: operations.PostV05ConsentsHipOnNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsHipOnNotifyResponse>;
    /**
     * postV05ConsentsHiuOnNotify - Consent notification
     *
     * This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED, notified by CM earlier via Gateway API - *** /v0.5/consents/hiu/notify***.
     *
    **/
    postV05ConsentsHiuOnNotify(req: operations.PostV05ConsentsHiuOnNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsHiuOnNotifyResponse>;
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
     * postV05HealthInformationOnRequest - Health information data request acknowledgement from HIP
     *
     * This API is called by HIP to acknowledge Health information request receipt. When HIU requests health information, CM generates a transactionId and makes a health information request to the HIP(s). HIPs acknowledgement to the health-information request is coveyed by this API. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.
     *
    **/
    postV05HealthInformationOnRequest(req: operations.PostV05HealthInformationOnRequestRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationOnRequestResponse>;
    /**
     * postV05HealthInformationRequest - Health information data request from HIU
     *
     * HIU request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via Gateway API - *** /v0.5/health-information/cm/on-request***.
     *
    **/
    postV05HealthInformationRequest(req: operations.PostV05HealthInformationRequestRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationRequestResponse>;
    /**
     * postV05LinksLinkAddContexts - API for HIP initiated care-context linking for patient
     *
     * API to submit care-context to CM for HIP initiated linking. The API must accompany the "accessToken" fetched in the users/auth process.
     *   1. subsequent usage for accessToken may be invalid if it was meant for one-time usage or if it expired
     *
    **/
    postV05LinksLinkAddContexts(req: operations.PostV05LinksLinkAddContextsRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkAddContextsResponse>;
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
     * postV05PatientsFind - Identify a patient by her consent-manager user-id
     *
     * This API is meant for identify to patient given her consent-manager-user-id. CM subsequently makes the /on-find Gateway API call with results.
     *
    **/
    postV05PatientsFind(req: operations.PostV05PatientsFindRequest, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsFindResponse>;
    /**
     * postV05PatientsProfileOnShare - Response to patient's share profile request
     *
     * Result of patient share profile request at HIP end.
     *
    **/
    postV05PatientsProfileOnShare(req: operations.PostV05PatientsProfileOnShareRequest, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsProfileOnShareResponse>;
    /**
     * postV05SubscriptionRequestsCmInit - Request for subscription
     *
     * creates a request for subscription. The subscription categories can be for care-contexts linkages or availability of data against existing care-contexts. Note that the requester must have HIU role
    **/
    postV05SubscriptionRequestsCmInit(req: operations.PostV05SubscriptionRequestsCmInitRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SubscriptionRequestsCmInitResponse>;
    /**
     * postV05SubscriptionRequestsHiuOnNotify - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
     *
     * This API is called by HIU as acknowledgement to subscription request relevant notifications.
     *
    **/
    postV05SubscriptionRequestsHiuOnNotify(req: operations.PostV05SubscriptionRequestsHiuOnNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SubscriptionRequestsHiuOnNotifyResponse>;
    /**
     * postV05SubscriptionsHiuOnNotify - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
     *
     * This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.
     *
    **/
    postV05SubscriptionsHiuOnNotify(req: operations.PostV05SubscriptionsHiuOnNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SubscriptionsHiuOnNotifyResponse>;
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
     * postV05UsersAuthOnNotify - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
     *
     * This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication.
     *
    **/
    postV05UsersAuthOnNotify(req: operations.PostV05UsersAuthOnNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthOnNotifyResponse>;
}
export {};
