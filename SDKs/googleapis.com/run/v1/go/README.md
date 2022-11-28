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
    
    req := operations.RunNamespacesAuthorizeddomainsListRequest{
        Security: operations.RunNamespacesAuthorizeddomainsListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.RunNamespacesAuthorizeddomainsListPathParams{
            Parent: "vel",
        },
        QueryParams: operations.RunNamespacesAuthorizeddomainsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "nobis",
            Alt: "json",
            Callback: "necessitatibus",
            Fields: "facilis",
            Key: "et",
            OauthToken: "veniam",
            PageSize: 8567289258926678511,
            PageToken: "ipsam",
            PrettyPrint: false,
            QuotaUser: "corrupti",
            UploadType: "perspiciatis",
            UploadProtocol: "doloribus",
        },
    }
    
    res, err := s.Namespaces.RunNamespacesAuthorizeddomainsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAuthorizedDomainsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### namespaces

* `RunNamespacesAuthorizeddomainsList` - List authorized domains.
* `RunNamespacesConfigurationsList` - List configurations.
* `RunNamespacesDomainmappingsCreate` - Create a new domain mapping.
* `RunNamespacesDomainmappingsDelete` - Delete a domain mapping.
* `RunNamespacesDomainmappingsGet` - Get information about a domain mapping.
* `RunNamespacesDomainmappingsList` - List all domain mappings.
* `RunNamespacesExecutionsCancel` - Cancel an execution.
* `RunNamespacesExecutionsList` - List executions.
* `RunNamespacesJobsCreate` - Create a job.
* `RunNamespacesJobsDelete` - Delete a job.
* `RunNamespacesJobsList` - List jobs.
* `RunNamespacesJobsReplaceJob` - Replace a job. Only the spec and metadata labels and annotations are modifiable. After the Replace request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* `RunNamespacesJobsRun` - Trigger creation of a new execution of this job.
* `RunNamespacesRevisionsList` - List revisions.
* `RunNamespacesRoutesList` - List routes.
* `RunNamespacesServicesCreate` - Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
* `RunNamespacesServicesDelete` - Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
* `RunNamespacesServicesGet` - Gets information about a service.
* `RunNamespacesServicesList` - Lists services for the given project and region.
* `RunNamespacesServicesReplaceService` - Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* `RunNamespacesTasksGet` - Get information about a task.
* `RunNamespacesTasksList` - List tasks.

### projects

* `RunProjectsLocationsAuthorizeddomainsList` - List authorized domains.
* `RunProjectsLocationsConfigurationsList` - List configurations.
* `RunProjectsLocationsDomainmappingsCreate` - Create a new domain mapping.
* `RunProjectsLocationsDomainmappingsList` - List all domain mappings.
* `RunProjectsLocationsList` - Lists information about the supported locations for this service.
* `RunProjectsLocationsRevisionsList` - List revisions.
* `RunProjectsLocationsRoutesList` - List routes.
* `RunProjectsLocationsServicesCreate` - Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
* `RunProjectsLocationsServicesDelete` - Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
* `RunProjectsLocationsServicesGet` - Gets information about a service.
* `RunProjectsLocationsServicesGetIamPolicy` - Gets the IAM Access Control policy currently in effect for the given Cloud Run service. This result does not include any inherited policies.
* `RunProjectsLocationsServicesList` - Lists services for the given project and region.
* `RunProjectsLocationsServicesReplaceService` - Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* `RunProjectsLocationsServicesSetIamPolicy` - Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
* `RunProjectsLocationsServicesTestIamPermissions` - Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
