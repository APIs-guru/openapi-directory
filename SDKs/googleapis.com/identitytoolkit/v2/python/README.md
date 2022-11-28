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
    
req = operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest(
    security=operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams(
        dollar_xgafv="1",
        access_token="deserunt",
        alt="json",
        callback="autem",
        fields="et",
        key="architecto",
        oauth_token="ducimus",
        pretty_print=True,
        quota_user="quis",
        upload_type="provident",
        upload_protocol="qui",
    ),
    request=shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest(
        display_name="sequi",
        id_token="porro",
        phone_verification_info=shared.GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo(
            android_verification_proof="est",
            code="et",
            phone_number="sint",
            session_info="aperiam",
        ),
        tenant_id="officiis",
    ),
)
    
res = s.accounts.identitytoolkit_accounts_mfa_enrollment_finalize(req)

if res.google_cloud_identitytoolkit_v2_finalize_mfa_enrollment_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accounts

* `identitytoolkit_accounts_mfa_enrollment_finalize` - Finishes enrolling a second factor for the user.
* `identitytoolkit_accounts_mfa_enrollment_start` - Step one of the MFA enrollment process. In SMS case, this sends an SMS verification code to the user.
* `identitytoolkit_accounts_mfa_enrollment_withdraw` - Revokes one second factor from the enrolled second factors for an account.
* `identitytoolkit_accounts_mfa_sign_in_finalize` - Verifies the MFA challenge and performs sign-in
* `identitytoolkit_accounts_mfa_sign_in_start` - Sends the MFA challenge

### defaultSupportedIdps

* `identitytoolkit_default_supported_idps_list` - List all default supported Idps.

### projects

* `identitytoolkit_projects_identity_platform_initialize_auth` - Initialize Identity Platform for a Cloud project. Identity Platform is an end-to-end authentication system for third-party users to access your apps and services. These could include mobile/web apps, games, APIs and beyond. This is the publicly available variant of EnableIdentityPlatform that is only available to billing-enabled projects.
* `identitytoolkit_projects_tenants_create` - Create a tenant. Requires write permission on the Agent project.
* `identitytoolkit_projects_tenants_default_supported_idp_configs_create` - Create a default supported Idp configuration for an Identity Toolkit project.
* `identitytoolkit_projects_tenants_default_supported_idp_configs_list` - List all default supported Idp configurations for an Identity Toolkit project.
* `identitytoolkit_projects_tenants_get_iam_policy` - Gets the access control policy for a resource. An error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Caller must have the right Google IAM permission on the resource.
* `identitytoolkit_projects_tenants_inbound_saml_configs_create` - Create an inbound SAML configuration for an Identity Toolkit project.
* `identitytoolkit_projects_tenants_inbound_saml_configs_list` - List all inbound SAML configurations for an Identity Toolkit project.
* `identitytoolkit_projects_tenants_list` - List tenants under the given agent project. Requires read permission on the Agent project.
* `identitytoolkit_projects_tenants_oauth_idp_configs_create` - Create an Oidc Idp configuration for an Identity Toolkit project.
* `identitytoolkit_projects_tenants_oauth_idp_configs_delete` - Delete an Oidc Idp configuration for an Identity Toolkit project.
* `identitytoolkit_projects_tenants_oauth_idp_configs_get` - Retrieve an Oidc Idp configuration for an Identity Toolkit project.
* `identitytoolkit_projects_tenants_oauth_idp_configs_list` - List all Oidc Idp configurations for an Identity Toolkit project.
* `identitytoolkit_projects_tenants_oauth_idp_configs_patch` - Update an Oidc Idp configuration for an Identity Toolkit project.
* `identitytoolkit_projects_tenants_set_iam_policy` - Sets the access control policy for a resource. If the policy exists, it is replaced. Caller must have the right Google IAM permission on the resource.
* `identitytoolkit_projects_tenants_test_iam_permissions` - Returns the caller's permissions on a resource. An error is returned if the resource does not exist. A caller is not required to have Google IAM permission to make this request.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
