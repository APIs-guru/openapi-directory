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
    
    req := operations.DeploymentmanagerCompositeTypesDeleteRequest{
        Security: operations.DeploymentmanagerCompositeTypesDeleteSecurity{
            Option1: &operations.DeploymentmanagerCompositeTypesDeleteSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.DeploymentmanagerCompositeTypesDeletePathParams{
            CompositeType: "aut",
            Project: "sunt",
        },
        QueryParams: operations.DeploymentmanagerCompositeTypesDeleteQueryParams{
            DollarXgafv: "2",
            AccessToken: "voluptates",
            Alt: "proto",
            Callback: "laudantium",
            Fields: "dignissimos",
            Key: "ut",
            OauthToken: "veniam",
            PrettyPrint: true,
            QuotaUser: "pariatur",
            UploadType: "dolores",
            UploadProtocol: "deserunt",
        },
    }
    
    res, err := s.CompositeTypes.DeploymentmanagerCompositeTypesDelete(ctx, req)
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

### compositeTypes

* `DeploymentmanagerCompositeTypesDelete` - Deletes a composite type.
* `DeploymentmanagerCompositeTypesGet` - Gets information about a specific composite type.
* `DeploymentmanagerCompositeTypesInsert` - Creates a composite type.
* `DeploymentmanagerCompositeTypesList` - Lists all composite types for Deployment Manager.
* `DeploymentmanagerCompositeTypesPatch` - Patches a composite type.
* `DeploymentmanagerCompositeTypesUpdate` - Updates a composite type.

### deployments

* `DeploymentmanagerDeploymentsCancelPreview` - Cancels and removes the preview currently associated with the deployment.
* `DeploymentmanagerDeploymentsDelete` - Deletes a deployment and all of the resources in the deployment.
* `DeploymentmanagerDeploymentsGet` - Gets information about a specific deployment.
* `DeploymentmanagerDeploymentsGetIamPolicy` - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* `DeploymentmanagerDeploymentsInsert` - Creates a deployment and all of the resources described by the deployment manifest.
* `DeploymentmanagerDeploymentsList` - Lists all deployments for a given project.
* `DeploymentmanagerDeploymentsPatch` - Patches a deployment and all of the resources described by the deployment manifest.
* `DeploymentmanagerDeploymentsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy.
* `DeploymentmanagerDeploymentsStop` - Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.
* `DeploymentmanagerDeploymentsTestIamPermissions` - Returns permissions that a caller has on the specified resource.
* `DeploymentmanagerDeploymentsUpdate` - Updates a deployment and all of the resources described by the deployment manifest.

### manifests

* `DeploymentmanagerManifestsGet` - Gets information about a specific manifest.
* `DeploymentmanagerManifestsList` - Lists all manifests for a given deployment.

### operations

* `DeploymentmanagerOperationsGet` - Gets information about a specific operation.
* `DeploymentmanagerOperationsList` - Lists all operations for a project.

### resources

* `DeploymentmanagerResourcesGet` - Gets information about a single resource.
* `DeploymentmanagerResourcesList` - Lists all resources in a given deployment.

### typeProviders

* `DeploymentmanagerTypeProvidersDelete` - Deletes a type provider.
* `DeploymentmanagerTypeProvidersGet` - Gets information about a specific type provider.
* `DeploymentmanagerTypeProvidersGetType` - Gets a type info for a type provided by a TypeProvider.
* `DeploymentmanagerTypeProvidersInsert` - Creates a type provider.
* `DeploymentmanagerTypeProvidersList` - Lists all resource type providers for Deployment Manager.
* `DeploymentmanagerTypeProvidersListTypes` - Lists all the type info for a TypeProvider.
* `DeploymentmanagerTypeProvidersPatch` - Patches a type provider.
* `DeploymentmanagerTypeProvidersUpdate` - Updates a type provider.

### types

* `DeploymentmanagerTypesGet` - Gets information about a specific type.
* `DeploymentmanagerTypesList` - Lists all resource types for Deployment Manager.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
