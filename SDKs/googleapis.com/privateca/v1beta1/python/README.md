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
    
req = operations.PrivatecaProjectsLocationsCertificateAuthoritiesActivateRequest(
    security=operations.PrivatecaProjectsLocationsCertificateAuthoritiesActivateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.PrivatecaProjectsLocationsCertificateAuthoritiesActivatePathParams(
        name="architecto",
    ),
    query_params=operations.PrivatecaProjectsLocationsCertificateAuthoritiesActivateQueryParams(
        dollar_xgafv="2",
        access_token="iure",
        alt="media",
        callback="aut",
        fields="est",
        key="corrupti",
        oauth_token="eaque",
        pretty_print=False,
        quota_user="et",
        upload_type="repellendus",
        upload_protocol="aut",
    ),
    request=shared.ActivateCertificateAuthorityRequest(
        pem_ca_certificate="in",
        request_id="rerum",
        subordinate_config=shared.SubordinateConfig(
            certificate_authority="distinctio",
            pem_issuer_chain=shared.SubordinateConfigChain(
                pem_certificates=[
                    "maxime",
                ],
            ),
        ),
    ),
)
    
res = s.projects.privateca_projects_locations_certificate_authorities_activate(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `privateca_projects_locations_certificate_authorities_activate` - Activate a CertificateAuthority that is in state PENDING_ACTIVATION and is of type SUBORDINATE. After the parent Certificate Authority signs a certificate signing request from FetchCertificateAuthorityCsr, this method can complete the activation process.
* `privateca_projects_locations_certificate_authorities_certificate_revocation_lists_list` - Lists CertificateRevocationLists.
* `privateca_projects_locations_certificate_authorities_certificates_create` - Create a new Certificate in a given Project, Location from a particular CertificateAuthority.
* `privateca_projects_locations_certificate_authorities_certificates_list` - Lists Certificates.
* `privateca_projects_locations_certificate_authorities_certificates_patch` - Update a Certificate. Currently, the only field you can update is the labels field.
* `privateca_projects_locations_certificate_authorities_certificates_revoke` - Revoke a Certificate.
* `privateca_projects_locations_certificate_authorities_create` - Create a new CertificateAuthority in a given Project and Location.
* `privateca_projects_locations_certificate_authorities_disable` - Disable a CertificateAuthority.
* `privateca_projects_locations_certificate_authorities_enable` - Enable a CertificateAuthority.
* `privateca_projects_locations_certificate_authorities_fetch` - Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state PENDING_ACTIVATION and is of type SUBORDINATE. The CSR must then be signed by the desired parent Certificate Authority, which could be another CertificateAuthority resource, or could be an on-prem certificate authority. See also ActivateCertificateAuthority.
* `privateca_projects_locations_certificate_authorities_list` - Lists CertificateAuthorities.
* `privateca_projects_locations_certificate_authorities_restore` - Restore a CertificateAuthority that is scheduled for deletion.
* `privateca_projects_locations_certificate_authorities_schedule_delete` - Schedule a CertificateAuthority for deletion.
* `privateca_projects_locations_list` - Lists information about the supported locations for this service.
* `privateca_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `privateca_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `privateca_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `privateca_projects_locations_reusable_configs_get` - Returns a ReusableConfig.
* `privateca_projects_locations_reusable_configs_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `privateca_projects_locations_reusable_configs_list` - Lists ReusableConfigs.
* `privateca_projects_locations_reusable_configs_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `privateca_projects_locations_reusable_configs_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
