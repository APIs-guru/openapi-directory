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
    
req = operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest(
    security=operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreatePathParams(
        parent="nobis",
    ),
    query_params=operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams(
        dollar_xgafv="1",
        access_token="neque",
        alt="json",
        callback="magnam",
        certificate_issuance_config_id="non",
        fields="inventore",
        key="et",
        oauth_token="et",
        pretty_print=True,
        quota_user="nemo",
        upload_type="a",
        upload_protocol="voluptate",
    ),
    request=shared.CertificateIssuanceConfigInput(
        certificate_authority_config=shared.CertificateAuthorityConfig(
            certificate_authority_service_config=shared.CertificateAuthorityServiceConfig(
                ca_pool="sed",
            ),
        ),
        description="provident",
        key_algorithm="RSA_2048",
        labels={
            "voluptatem": "eum",
            "quo": "repellat",
        },
        lifetime="magni",
        name="veritatis",
        rotation_window_percentage=1427044159730156609,
    ),
)
    
res = s.projects.certificatemanager_projects_locations_certificate_issuance_configs_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `certificatemanager_projects_locations_certificate_issuance_configs_create` - Creates a new CertificateIssuanceConfig in a given project and location.
* `certificatemanager_projects_locations_certificate_issuance_configs_list` - Lists CertificateIssuanceConfigs in a given project and location.
* `certificatemanager_projects_locations_certificate_maps_certificate_map_entries_create` - Creates a new CertificateMapEntry in a given project and location.
* `certificatemanager_projects_locations_certificate_maps_certificate_map_entries_list` - Lists CertificateMapEntries in a given project and location.
* `certificatemanager_projects_locations_certificate_maps_create` - Creates a new CertificateMap in a given project and location.
* `certificatemanager_projects_locations_certificate_maps_list` - Lists CertificateMaps in a given project and location.
* `certificatemanager_projects_locations_certificates_create` - Creates a new Certificate in a given project and location.
* `certificatemanager_projects_locations_certificates_list` - Lists Certificates in a given project and location.
* `certificatemanager_projects_locations_dns_authorizations_create` - Creates a new DnsAuthorization in a given project and location.
* `certificatemanager_projects_locations_dns_authorizations_list` - Lists DnsAuthorizations in a given project and location.
* `certificatemanager_projects_locations_dns_authorizations_patch` - Updates a DnsAuthorization.
* `certificatemanager_projects_locations_list` - Lists information about the supported locations for this service.
* `certificatemanager_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `certificatemanager_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `certificatemanager_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `certificatemanager_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
