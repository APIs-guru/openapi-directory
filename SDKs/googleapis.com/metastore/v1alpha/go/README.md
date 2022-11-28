# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.MetastoreProjectsLocationsFederationsCreateRequest{
        Security: operations.MetastoreProjectsLocationsFederationsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.MetastoreProjectsLocationsFederationsCreatePathParams{
            Parent: "ducimus",
        },
        QueryParams: operations.MetastoreProjectsLocationsFederationsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "voluptate",
            Alt: "media",
            Callback: "qui",
            FederationID: "quis",
            Fields: "quis",
            Key: "commodi",
            OauthToken: "molestiae",
            PrettyPrint: false,
            QuotaUser: "cumque",
            RequestID: "incidunt",
            UploadType: "omnis",
            UploadProtocol: "corrupti",
        },
        Request: &shared.FederationInput{
            BackendMetastores: map[string]shared.BackendMetastore{
                "beatae": shared.BackendMetastore{
                    MetastoreType: "METASTORE_TYPE_UNSPECIFIED",
                    Name: "ut",
                },
                "debitis": shared.BackendMetastore{
                    MetastoreType: "BIGQUERY",
                    Name: "repudiandae",
                },
                "voluptas": shared.BackendMetastore{
                    MetastoreType: "DATAPROC_METASTORE",
                    Name: "et",
                },
            },
            Labels: map[string]string{
                "odio": "ut",
                "assumenda": "dolores",
                "inventore": "nostrum",
            },
            Name: "fuga",
            Version: "harum",
        },
    }
    
    res, err := s.Projects.MetastoreProjectsLocationsFederationsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `MetastoreProjectsLocationsFederationsCreate` - Creates a metastore federation in a project and location.
* `MetastoreProjectsLocationsFederationsList` - Lists federations in a project and location.
* `MetastoreProjectsLocationsList` - Lists information about the supported locations for this service.
* `MetastoreProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `MetastoreProjectsLocationsServicesBackupsCreate` - Creates a new backup in a given project and location.
* `MetastoreProjectsLocationsServicesBackupsDelete` - Deletes a single backup.
* `MetastoreProjectsLocationsServicesBackupsList` - Lists backups in a service.
* `MetastoreProjectsLocationsServicesCreate` - Creates a metastore service in a project and location.
* `MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* `MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `MetastoreProjectsLocationsServicesExportMetadata` - Exports metadata from a service.
* `MetastoreProjectsLocationsServicesList` - Lists services in a project and location.
* `MetastoreProjectsLocationsServicesMetadataImportsCreate` - Creates a new MetadataImport in a given project and location.
* `MetastoreProjectsLocationsServicesMetadataImportsGet` - Gets details of a single import.
* `MetastoreProjectsLocationsServicesMetadataImportsList` - Lists imports in a service.
* `MetastoreProjectsLocationsServicesMetadataImportsPatch` - Updates a single import. Only the description field of MetadataImport is supported to be updated.
* `MetastoreProjectsLocationsServicesRemoveIamPolicy` - Removes the attached IAM policies for a resource
* `MetastoreProjectsLocationsServicesRestore` - Restores a service from a backup.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
