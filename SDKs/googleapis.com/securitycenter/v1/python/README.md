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
    
req = operations.SecuritycenterOrganizationsAssetsRunDiscoveryRequest(
    security=operations.SecuritycenterOrganizationsAssetsRunDiscoverySecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.SecuritycenterOrganizationsAssetsRunDiscoveryPathParams(
        parent="quia",
    ),
    query_params=operations.SecuritycenterOrganizationsAssetsRunDiscoveryQueryParams(
        dollar_xgafv="1",
        access_token="nihil",
        alt="media",
        callback="labore",
        fields="error",
        key="fuga",
        oauth_token="unde",
        pretty_print=True,
        quota_user="est",
        upload_type="voluptas",
        upload_protocol="maiores",
    ),
    request={
        "consectetur": "enim",
        "provident": "dolores",
    },
)
    
res = s.organizations.securitycenter_organizations_assets_run_discovery(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### organizations

* `securitycenter_organizations_assets_run_discovery` - Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.
* `securitycenter_organizations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `securitycenter_organizations_sources_create` - Creates a source.
* `securitycenter_organizations_sources_findings_create` - Creates a finding. The corresponding source must exist for finding creation to succeed.
* `securitycenter_organizations_sources_get_iam_policy` - Gets the access control policy on the specified Source.
* `securitycenter_organizations_sources_set_iam_policy` - Sets the access control policy on the specified Source.
* `securitycenter_organizations_sources_test_iam_permissions` - Returns the permissions that a caller has on the specified source.

### projects

* `securitycenter_projects_assets_group` - Filters an organization's assets and groups them by their specified properties.
* `securitycenter_projects_assets_list` - Lists an organization's assets.
* `securitycenter_projects_big_query_exports_create` - Creates a big query export.
* `securitycenter_projects_big_query_exports_list` - Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.
* `securitycenter_projects_findings_bulk_mute` - Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.
* `securitycenter_projects_mute_configs_create` - Creates a mute config.
* `securitycenter_projects_mute_configs_list` - Lists mute configs.
* `securitycenter_projects_notification_configs_create` - Creates a notification config.
* `securitycenter_projects_notification_configs_delete` - Deletes a notification config.
* `securitycenter_projects_notification_configs_get` - Gets a notification config.
* `securitycenter_projects_notification_configs_list` - Lists notification configs.
* `securitycenter_projects_sources_findings_external_systems_patch` - Updates external system. This is for a given finding.
* `securitycenter_projects_sources_findings_group` - Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings, /v1/folders/{folder_id}/sources/-/findings, /v1/projects/{project_id}/sources/-/findings
* `securitycenter_projects_sources_findings_list` - Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings
* `securitycenter_projects_sources_findings_set_mute` - Updates the mute state of a finding.
* `securitycenter_projects_sources_findings_set_state` - Updates the state of a finding.
* `securitycenter_projects_sources_list` - Lists all sources belonging to an organization.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
