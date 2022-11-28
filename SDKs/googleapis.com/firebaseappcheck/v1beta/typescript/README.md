# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest, FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
    },
  },
  pathParams: {
    parent: "eaque",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "ut",
    alt: "proto",
    callback: "impedit",
    fields: "quia",
    key: "quia",
    names: [
      "nihil",
      "beatae",
    ],
    oauthToken: "corporis",
    prettyPrint: true,
    quotaUser: "officia",
    uploadType: "ipsum",
    uploadProtocol: "provident",
  },
};

sdk.projects.firebaseappcheckProjectsAppsAppAttestConfigBatchGet(req).then((res: FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `firebaseappcheckProjectsAppsAppAttestConfigBatchGet` - Atomically gets the AppAttestConfigs for the specified list of apps.
* `firebaseappcheckProjectsAppsDebugTokensCreate` - Creates a new DebugToken for the specified app. For security reasons, after the creation operation completes, the `token` field cannot be updated or retrieved, but you can revoke the debug token using DeleteDebugToken. Each app can have a maximum of 20 debug tokens.
* `firebaseappcheckProjectsAppsDebugTokensDelete` - Deletes the specified DebugToken. A deleted debug token cannot be used to exchange for an App Check token. Use this method when you suspect the secret `token` has been compromised or when you no longer need the debug token.
* `firebaseappcheckProjectsAppsDebugTokensList` - Lists all DebugTokens for the specified app. For security reasons, the `token` field is never populated in the response.
* `firebaseappcheckProjectsAppsDeviceCheckConfigBatchGet` - Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response.
* `firebaseappcheckProjectsAppsExchangeAppAttestAssertion` - Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.
* `firebaseappcheckProjectsAppsExchangeAppAttestAttestation` - Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).
* `firebaseappcheckProjectsAppsExchangeCustomToken` - Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken.
* `firebaseappcheckProjectsAppsExchangeDebugToken` - Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.
* `firebaseappcheckProjectsAppsExchangeDeviceCheckToken` - Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken.
* `firebaseappcheckProjectsAppsExchangePlayIntegrityToken` - Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken.
* `firebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseToken` - Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an App Check token AppCheckToken.
* `firebaseappcheckProjectsAppsExchangeRecaptchaToken` - Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.
* `firebaseappcheckProjectsAppsExchangeRecaptchaV3Token` - Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.
* `firebaseappcheckProjectsAppsExchangeSafetyNetToken` - Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.
* `firebaseappcheckProjectsAppsGenerateAppAttestChallenge` - Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.
* `firebaseappcheckProjectsAppsGeneratePlayIntegrityChallenge` - Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.
* `firebaseappcheckProjectsAppsPlayIntegrityConfigBatchGet` - Atomically gets the PlayIntegrityConfigs for the specified list of apps.
* `firebaseappcheckProjectsAppsRecaptchaConfigBatchGet` - Atomically gets the RecaptchaConfigs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.
* `firebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGet` - Atomically gets the RecaptchaEnterpriseConfigs for the specified list of apps.
* `firebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGet` - Atomically gets the RecaptchaV3Configs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.
* `firebaseappcheckProjectsAppsSafetyNetConfigBatchGet` - Atomically gets the SafetyNetConfigs for the specified list of apps.
* `firebaseappcheckProjectsServicesBatchUpdate` - Atomically updates the specified Service configurations.
* `firebaseappcheckProjectsServicesGet` - Gets the Service configuration for the specified service name.
* `firebaseappcheckProjectsServicesList` - Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.
* `firebaseappcheckProjectsServicesPatch` - Updates the specified Service configuration.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
