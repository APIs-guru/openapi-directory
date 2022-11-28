import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Gateway {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getV05Certs - Get certs for JWT verification
    **/
    getV05Certs(config?: AxiosRequestConfig): Promise<operations.GetV05CertsResponse>;
    /**
     * getV05WellKnownOpenidConfiguration - Get openid configuration
    **/
    getV05WellKnownOpenidConfiguration(config?: AxiosRequestConfig): Promise<operations.GetV05WellKnownOpenidConfigurationResponse>;
    /**
     * postV05ConsentRequestsInit - Create consent request
     *
     * Creates a consent request to get data about a patient by HIU user.
    **/
    postV05ConsentRequestsInit(req: operations.PostV05ConsentRequestsInitRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentRequestsInitResponse>;
    /**
     * postV05ConsentRequestsStatus - Get consent request status
     *
     * Get status of consent request done previously
    **/
    postV05ConsentRequestsStatus(req: operations.PostV05ConsentRequestsStatusRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentRequestsStatusResponse>;
    /**
     * postV05ConsentsFetch - Get consent artefact
    **/
    postV05ConsentsFetch(req: operations.PostV05ConsentsFetchRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsFetchResponse>;
    /**
     * postV05ConsentsHiuOnNotify - Consent notification
     *
     * This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.
     *
    **/
    postV05ConsentsHiuOnNotify(req: operations.PostV05ConsentsHiuOnNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsHiuOnNotifyResponse>;
    /**
     * postV05HealthInformationCmRequest - Health information data request
     *
     * Request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via /on-request.
     *
    **/
    postV05HealthInformationCmRequest(req: operations.PostV05HealthInformationCmRequestRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationCmRequestResponse>;
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
     * postV05PatientsFind - Identify a patient by her consent-manager user-id
     *
     * This API is meant for identify to patient given her consent-manager-user-id
     *
    **/
    postV05PatientsFind(req: operations.PostV05PatientsFindRequest, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsFindResponse>;
    /**
     * postV05Sessions - Get access token
    **/
    postV05Sessions(req: operations.PostV05SessionsRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SessionsResponse>;
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
     *   1. **NOTE**, only **KYC** purpose is applicable for HIU. Hence HIU should only sent KYC in **query.authMode** in the request
     *
    **/
    postV05UsersAuthInit(req: operations.PostV05UsersAuthInitRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthInitResponse>;
    /**
     * postV05UsersAuthOnNotify - callback API by HIU/HIPs as acknowledgement of auth notification
     *
     * This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication.
     *
    **/
    postV05UsersAuthOnNotify(req: operations.PostV05UsersAuthOnNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthOnNotifyResponse>;
}
