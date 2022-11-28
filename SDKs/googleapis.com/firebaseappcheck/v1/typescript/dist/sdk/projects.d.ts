import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * firebaseappcheckProjectsAppsAppAttestConfigBatchGet - Atomically gets the AppAttestConfigs for the specified list of apps.
    **/
    firebaseappcheckProjectsAppsAppAttestConfigBatchGet(req: operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse>;
    /**
     * firebaseappcheckProjectsAppsDebugTokensCreate - Creates a new DebugToken for the specified app. For security reasons, after the creation operation completes, the `token` field cannot be updated or retrieved, but you can revoke the debug token using DeleteDebugToken. Each app can have a maximum of 20 debug tokens.
    **/
    firebaseappcheckProjectsAppsDebugTokensCreate(req: operations.FirebaseappcheckProjectsAppsDebugTokensCreateRequest, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsDebugTokensCreateResponse>;
    /**
     * firebaseappcheckProjectsAppsDebugTokensDelete - Deletes the specified DebugToken. A deleted debug token cannot be used to exchange for an App Check token. Use this method when you suspect the secret `token` has been compromised or when you no longer need the debug token.
    **/
    firebaseappcheckProjectsAppsDebugTokensDelete(req: operations.FirebaseappcheckProjectsAppsDebugTokensDeleteRequest, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsDebugTokensDeleteResponse>;
    /**
     * firebaseappcheckProjectsAppsDebugTokensList - Lists all DebugTokens for the specified app. For security reasons, the `token` field is never populated in the response.
    **/
    firebaseappcheckProjectsAppsDebugTokensList(req: operations.FirebaseappcheckProjectsAppsDebugTokensListRequest, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsDebugTokensListResponse>;
    /**
     * firebaseappcheckProjectsAppsDeviceCheckConfigBatchGet - Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response.
    **/
    firebaseappcheckProjectsAppsDeviceCheckConfigBatchGet(req: operations.FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetRequest, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse>;
    /**
     * firebaseappcheckProjectsAppsExchangeAppAttestAssertion - Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.
    **/
    firebaseappcheckProjectsAppsExchangeAppAttestAssertion(req: operations.FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse>;
    /**
     * firebaseappcheckProjectsAppsExchangeAppAttestAttestation - Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).
    **/
    firebaseappcheckProjectsAppsExchangeAppAttestAttestation(req: operations.FirebaseappcheckProjectsAppsExchangeAppAttestAttestationRequest, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse>;
    /**
     * firebaseappcheckProjectsAppsExchangeCustomToken - Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken.
    **/
    firebaseappcheckProjectsAppsExchangeCustomToken(req: operations.FirebaseappcheckProjectsAppsExchangeCustomTokenRequest, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsExchangeCustomTokenResponse>;
    /**
     * firebaseappcheckProjectsAppsExchangeDebugToken - Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.
    **/
    firebaseappcheckProjectsAppsExchangeDebugToken(req: operations.FirebaseappcheckProjectsAppsExchangeDebugTokenRequest, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsExchangeDebugTokenResponse>;
    /**
     * firebaseappcheckProjectsAppsExchangeDeviceCheckToken - Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken.
    **/
    firebaseappcheckProjectsAppsExchangeDeviceCheckToken(req: operations.FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse>;
    /**
     * firebaseappcheckProjectsAppsExchangePlayIntegrityToken - Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken.
    **/
    firebaseappcheckProjectsAppsExchangePlayIntegrityToken(req: operations.FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse>;
    /**
     * firebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseToken - Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an AppCheckToken.
    **/
    firebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseToken(req: operations.FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse>;
    /**
     * firebaseappcheckProjectsAppsExchangeRecaptchaV3Token - Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.
    **/
    firebaseappcheckProjectsAppsExchangeRecaptchaV3Token(req: operations.FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse>;
    /**
     * firebaseappcheckProjectsAppsExchangeSafetyNetToken - Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.
    **/
    firebaseappcheckProjectsAppsExchangeSafetyNetToken(req: operations.FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse>;
    /**
     * firebaseappcheckProjectsAppsGenerateAppAttestChallenge - Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.
    **/
    firebaseappcheckProjectsAppsGenerateAppAttestChallenge(req: operations.FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse>;
    /**
     * firebaseappcheckProjectsAppsGeneratePlayIntegrityChallenge - Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.
    **/
    firebaseappcheckProjectsAppsGeneratePlayIntegrityChallenge(req: operations.FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeResponse>;
    /**
     * firebaseappcheckProjectsAppsPlayIntegrityConfigBatchGet - Atomically gets the PlayIntegrityConfigs for the specified list of apps.
    **/
    firebaseappcheckProjectsAppsPlayIntegrityConfigBatchGet(req: operations.FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetRequest, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse>;
    /**
     * firebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGet - Atomically gets the RecaptchaEnterpriseConfigs for the specified list of apps.
    **/
    firebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGet(req: operations.FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetRequest, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse>;
    /**
     * firebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGet - Atomically gets the RecaptchaV3Configs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.
    **/
    firebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGet(req: operations.FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetRequest, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse>;
    /**
     * firebaseappcheckProjectsAppsSafetyNetConfigBatchGet - Atomically gets the SafetyNetConfigs for the specified list of apps.
    **/
    firebaseappcheckProjectsAppsSafetyNetConfigBatchGet(req: operations.FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetRequest, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetResponse>;
    /**
     * firebaseappcheckProjectsServicesBatchUpdate - Atomically updates the specified Service configurations.
    **/
    firebaseappcheckProjectsServicesBatchUpdate(req: operations.FirebaseappcheckProjectsServicesBatchUpdateRequest, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsServicesBatchUpdateResponse>;
    /**
     * firebaseappcheckProjectsServicesGet - Gets the Service configuration for the specified service name.
    **/
    firebaseappcheckProjectsServicesGet(req: operations.FirebaseappcheckProjectsServicesGetRequest, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsServicesGetResponse>;
    /**
     * firebaseappcheckProjectsServicesList - Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.
    **/
    firebaseappcheckProjectsServicesList(req: operations.FirebaseappcheckProjectsServicesListRequest, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsServicesListResponse>;
    /**
     * firebaseappcheckProjectsServicesPatch - Updates the specified Service configuration.
    **/
    firebaseappcheckProjectsServicesPatch(req: operations.FirebaseappcheckProjectsServicesPatchRequest, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsServicesPatchResponse>;
}
