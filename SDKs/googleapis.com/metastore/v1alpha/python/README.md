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
    
req = operations.MetastoreProjectsLocationsFederationsCreateRequest(
    security=operations.MetastoreProjectsLocationsFederationsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.MetastoreProjectsLocationsFederationsCreatePathParams(
        parent="ducimus",
    ),
    query_params=operations.MetastoreProjectsLocationsFederationsCreateQueryParams(
        dollar_xgafv="2",
        access_token="voluptate",
        alt="media",
        callback="qui",
        federation_id="quis",
        fields="quis",
        key="commodi",
        oauth_token="molestiae",
        pretty_print=False,
        quota_user="cumque",
        request_id="incidunt",
        upload_type="omnis",
        upload_protocol="corrupti",
    ),
    request=shared.FederationInput(
        backend_metastores={
            "beatae": shared.BackendMetastore(
                metastore_type="METASTORE_TYPE_UNSPECIFIED",
                name="ut",
            ),
            "debitis": shared.BackendMetastore(
                metastore_type="BIGQUERY",
                name="repudiandae",
            ),
            "voluptas": shared.BackendMetastore(
                metastore_type="DATAPROC_METASTORE",
                name="et",
            ),
        },
        labels={
            "odio": "ut",
            "assumenda": "dolores",
            "inventore": "nostrum",
        },
        name="fuga",
        version="harum",
    ),
)
    
res = s.projects.metastore_projects_locations_federations_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `metastore_projects_locations_federations_create` - Creates a metastore federation in a project and location.
* `metastore_projects_locations_federations_list` - Lists federations in a project and location.
* `metastore_projects_locations_list` - Lists information about the supported locations for this service.
* `metastore_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `metastore_projects_locations_services_backups_create` - Creates a new backup in a given project and location.
* `metastore_projects_locations_services_backups_delete` - Deletes a single backup.
* `metastore_projects_locations_services_backups_list` - Lists backups in a service.
* `metastore_projects_locations_services_create` - Creates a metastore service in a project and location.
* `metastore_projects_locations_services_databases_tables_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `metastore_projects_locations_services_databases_tables_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* `metastore_projects_locations_services_databases_tables_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `metastore_projects_locations_services_export_metadata` - Exports metadata from a service.
* `metastore_projects_locations_services_list` - Lists services in a project and location.
* `metastore_projects_locations_services_metadata_imports_create` - Creates a new MetadataImport in a given project and location.
* `metastore_projects_locations_services_metadata_imports_get` - Gets details of a single import.
* `metastore_projects_locations_services_metadata_imports_list` - Lists imports in a service.
* `metastore_projects_locations_services_metadata_imports_patch` - Updates a single import. Only the description field of MetadataImport is supported to be updated.
* `metastore_projects_locations_services_remove_iam_policy` - Removes the attached IAM policies for a resource
* `metastore_projects_locations_services_restore` - Restores a service from a backup.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
