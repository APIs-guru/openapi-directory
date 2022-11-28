# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest(
    security=operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurity(
        option1=operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    path_params=operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetPathParams(
        parent="sit",
    ),
    query_params=operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetQueryParams(
        dollar_xgafv="2",
        access_token="consectetur",
        alt="media",
        callback="sapiente",
        fields="eum",
        key="sit",
        names=[
            "hic",
            "laborum",
            "maxime",
        ],
        oauth_token="voluptatibus",
        pretty_print=False,
        quota_user="mollitia",
        upload_type="adipisci",
        upload_protocol="aut",
    ),
)
    
res = s.projects.firebaseappcheck_projects_apps_app_attest_config_batch_get(req)

if res.google_firebase_appcheck_v1_batch_get_app_attest_configs_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `firebaseappcheck_projects_apps_app_attest_config_batch_get` - Atomically gets the AppAttestConfigs for the specified list of apps.
* `firebaseappcheck_projects_apps_debug_tokens_create` - Creates a new DebugToken for the specified app. For security reasons, after the creation operation completes, the `token` field cannot be updated or retrieved, but you can revoke the debug token using DeleteDebugToken. Each app can have a maximum of 20 debug tokens.
* `firebaseappcheck_projects_apps_debug_tokens_delete` - Deletes the specified DebugToken. A deleted debug token cannot be used to exchange for an App Check token. Use this method when you suspect the secret `token` has been compromised or when you no longer need the debug token.
* `firebaseappcheck_projects_apps_debug_tokens_list` - Lists all DebugTokens for the specified app. For security reasons, the `token` field is never populated in the response.
* `firebaseappcheck_projects_apps_device_check_config_batch_get` - Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response.
* `firebaseappcheck_projects_apps_exchange_app_attest_assertion` - Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.
* `firebaseappcheck_projects_apps_exchange_app_attest_attestation` - Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).
* `firebaseappcheck_projects_apps_exchange_custom_token` - Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken.
* `firebaseappcheck_projects_apps_exchange_debug_token` - Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.
* `firebaseappcheck_projects_apps_exchange_device_check_token` - Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken.
* `firebaseappcheck_projects_apps_exchange_play_integrity_token` - Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken.
* `firebaseappcheck_projects_apps_exchange_recaptcha_enterprise_token` - Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an AppCheckToken.
* `firebaseappcheck_projects_apps_exchange_recaptcha_v3_token` - Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.
* `firebaseappcheck_projects_apps_exchange_safety_net_token` - Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.
* `firebaseappcheck_projects_apps_generate_app_attest_challenge` - Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.
* `firebaseappcheck_projects_apps_generate_play_integrity_challenge` - Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.
* `firebaseappcheck_projects_apps_play_integrity_config_batch_get` - Atomically gets the PlayIntegrityConfigs for the specified list of apps.
* `firebaseappcheck_projects_apps_recaptcha_enterprise_config_batch_get` - Atomically gets the RecaptchaEnterpriseConfigs for the specified list of apps.
* `firebaseappcheck_projects_apps_recaptcha_v3_config_batch_get` - Atomically gets the RecaptchaV3Configs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.
* `firebaseappcheck_projects_apps_safety_net_config_batch_get` - Atomically gets the SafetyNetConfigs for the specified list of apps.
* `firebaseappcheck_projects_services_batch_update` - Atomically updates the specified Service configurations.
* `firebaseappcheck_projects_services_get` - Gets the Service configuration for the specified service name.
* `firebaseappcheck_projects_services_list` - Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.
* `firebaseappcheck_projects_services_patch` - Updates the specified Service configuration.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
