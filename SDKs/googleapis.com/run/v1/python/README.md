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
    
req = operations.RunNamespacesAuthorizeddomainsListRequest(
    security=operations.RunNamespacesAuthorizeddomainsListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.RunNamespacesAuthorizeddomainsListPathParams(
        parent="vel",
    ),
    query_params=operations.RunNamespacesAuthorizeddomainsListQueryParams(
        dollar_xgafv="2",
        access_token="nobis",
        alt="json",
        callback="necessitatibus",
        fields="facilis",
        key="et",
        oauth_token="veniam",
        page_size=8567289258926678511,
        page_token="ipsam",
        pretty_print=False,
        quota_user="corrupti",
        upload_type="perspiciatis",
        upload_protocol="doloribus",
    ),
)
    
res = s.namespaces.run_namespaces_authorizeddomains_list(req)

if res.list_authorized_domains_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### namespaces

* `run_namespaces_authorizeddomains_list` - List authorized domains.
* `run_namespaces_configurations_list` - List configurations.
* `run_namespaces_domainmappings_create` - Create a new domain mapping.
* `run_namespaces_domainmappings_delete` - Delete a domain mapping.
* `run_namespaces_domainmappings_get` - Get information about a domain mapping.
* `run_namespaces_domainmappings_list` - List all domain mappings.
* `run_namespaces_executions_cancel` - Cancel an execution.
* `run_namespaces_executions_list` - List executions.
* `run_namespaces_jobs_create` - Create a job.
* `run_namespaces_jobs_delete` - Delete a job.
* `run_namespaces_jobs_list` - List jobs.
* `run_namespaces_jobs_replace_job` - Replace a job. Only the spec and metadata labels and annotations are modifiable. After the Replace request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* `run_namespaces_jobs_run` - Trigger creation of a new execution of this job.
* `run_namespaces_revisions_list` - List revisions.
* `run_namespaces_routes_list` - List routes.
* `run_namespaces_services_create` - Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
* `run_namespaces_services_delete` - Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
* `run_namespaces_services_get` - Gets information about a service.
* `run_namespaces_services_list` - Lists services for the given project and region.
* `run_namespaces_services_replace_service` - Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* `run_namespaces_tasks_get` - Get information about a task.
* `run_namespaces_tasks_list` - List tasks.

### projects

* `run_projects_locations_authorizeddomains_list` - List authorized domains.
* `run_projects_locations_configurations_list` - List configurations.
* `run_projects_locations_domainmappings_create` - Create a new domain mapping.
* `run_projects_locations_domainmappings_list` - List all domain mappings.
* `run_projects_locations_list` - Lists information about the supported locations for this service.
* `run_projects_locations_revisions_list` - List revisions.
* `run_projects_locations_routes_list` - List routes.
* `run_projects_locations_services_create` - Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
* `run_projects_locations_services_delete` - Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
* `run_projects_locations_services_get` - Gets information about a service.
* `run_projects_locations_services_get_iam_policy` - Gets the IAM Access Control policy currently in effect for the given Cloud Run service. This result does not include any inherited policies.
* `run_projects_locations_services_list` - Lists services for the given project and region.
* `run_projects_locations_services_replace_service` - Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* `run_projects_locations_services_set_iam_policy` - Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
* `run_projects_locations_services_test_iam_permissions` - Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
