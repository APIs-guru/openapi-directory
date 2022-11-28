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
import { RunNamespacesAuthorizeddomainsListRequest, RunNamespacesAuthorizeddomainsListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: RunNamespacesAuthorizeddomainsListRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "vel",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "nobis",
    alt: "json",
    callback: "necessitatibus",
    fields: "facilis",
    key: "et",
    oauthToken: "veniam",
    pageSize: 8567289258926678511,
    pageToken: "ipsam",
    prettyPrint: false,
    quotaUser: "corrupti",
    uploadType: "perspiciatis",
    uploadProtocol: "doloribus",
  },
};

sdk.namespaces.runNamespacesAuthorizeddomainsList(req).then((res: RunNamespacesAuthorizeddomainsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### namespaces

* `runNamespacesAuthorizeddomainsList` - List authorized domains.
* `runNamespacesConfigurationsList` - List configurations.
* `runNamespacesDomainmappingsCreate` - Create a new domain mapping.
* `runNamespacesDomainmappingsDelete` - Delete a domain mapping.
* `runNamespacesDomainmappingsGet` - Get information about a domain mapping.
* `runNamespacesDomainmappingsList` - List all domain mappings.
* `runNamespacesExecutionsCancel` - Cancel an execution.
* `runNamespacesExecutionsList` - List executions.
* `runNamespacesJobsCreate` - Create a job.
* `runNamespacesJobsDelete` - Delete a job.
* `runNamespacesJobsList` - List jobs.
* `runNamespacesJobsReplaceJob` - Replace a job. Only the spec and metadata labels and annotations are modifiable. After the Replace request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* `runNamespacesJobsRun` - Trigger creation of a new execution of this job.
* `runNamespacesRevisionsList` - List revisions.
* `runNamespacesRoutesList` - List routes.
* `runNamespacesServicesCreate` - Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
* `runNamespacesServicesDelete` - Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
* `runNamespacesServicesGet` - Gets information about a service.
* `runNamespacesServicesList` - Lists services for the given project and region.
* `runNamespacesServicesReplaceService` - Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* `runNamespacesTasksGet` - Get information about a task.
* `runNamespacesTasksList` - List tasks.

### projects

* `runProjectsLocationsAuthorizeddomainsList` - List authorized domains.
* `runProjectsLocationsConfigurationsList` - List configurations.
* `runProjectsLocationsDomainmappingsCreate` - Create a new domain mapping.
* `runProjectsLocationsDomainmappingsList` - List all domain mappings.
* `runProjectsLocationsList` - Lists information about the supported locations for this service.
* `runProjectsLocationsRevisionsList` - List revisions.
* `runProjectsLocationsRoutesList` - List routes.
* `runProjectsLocationsServicesCreate` - Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
* `runProjectsLocationsServicesDelete` - Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
* `runProjectsLocationsServicesGet` - Gets information about a service.
* `runProjectsLocationsServicesGetIamPolicy` - Gets the IAM Access Control policy currently in effect for the given Cloud Run service. This result does not include any inherited policies.
* `runProjectsLocationsServicesList` - Lists services for the given project and region.
* `runProjectsLocationsServicesReplaceService` - Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* `runProjectsLocationsServicesSetIamPolicy` - Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
* `runProjectsLocationsServicesTestIamPermissions` - Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
