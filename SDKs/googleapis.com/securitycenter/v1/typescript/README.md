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
import { SecuritycenterOrganizationsAssetsRunDiscoveryRequest, SecuritycenterOrganizationsAssetsRunDiscoveryResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: SecuritycenterOrganizationsAssetsRunDiscoveryRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "quia",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "nihil",
    alt: "media",
    callback: "labore",
    fields: "error",
    key: "fuga",
    oauthToken: "unde",
    prettyPrint: true,
    quotaUser: "est",
    uploadType: "voluptas",
    uploadProtocol: "maiores",
  },
  request: {
    "consectetur": "enim",
    "provident": "dolores",
  },
};

sdk.organizations.securitycenterOrganizationsAssetsRunDiscovery(req).then((res: SecuritycenterOrganizationsAssetsRunDiscoveryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### organizations

* `securitycenterOrganizationsAssetsRunDiscovery` - Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.
* `securitycenterOrganizationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `securitycenterOrganizationsSourcesCreate` - Creates a source.
* `securitycenterOrganizationsSourcesFindingsCreate` - Creates a finding. The corresponding source must exist for finding creation to succeed.
* `securitycenterOrganizationsSourcesGetIamPolicy` - Gets the access control policy on the specified Source.
* `securitycenterOrganizationsSourcesSetIamPolicy` - Sets the access control policy on the specified Source.
* `securitycenterOrganizationsSourcesTestIamPermissions` - Returns the permissions that a caller has on the specified source.

### projects

* `securitycenterProjectsAssetsGroup` - Filters an organization's assets and groups them by their specified properties.
* `securitycenterProjectsAssetsList` - Lists an organization's assets.
* `securitycenterProjectsBigQueryExportsCreate` - Creates a big query export.
* `securitycenterProjectsBigQueryExportsList` - Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.
* `securitycenterProjectsFindingsBulkMute` - Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.
* `securitycenterProjectsMuteConfigsCreate` - Creates a mute config.
* `securitycenterProjectsMuteConfigsList` - Lists mute configs.
* `securitycenterProjectsNotificationConfigsCreate` - Creates a notification config.
* `securitycenterProjectsNotificationConfigsDelete` - Deletes a notification config.
* `securitycenterProjectsNotificationConfigsGet` - Gets a notification config.
* `securitycenterProjectsNotificationConfigsList` - Lists notification configs.
* `securitycenterProjectsSourcesFindingsExternalSystemsPatch` - Updates external system. This is for a given finding.
* `securitycenterProjectsSourcesFindingsGroup` - Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings, /v1/folders/{folder_id}/sources/-/findings, /v1/projects/{project_id}/sources/-/findings
* `securitycenterProjectsSourcesFindingsList` - Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings
* `securitycenterProjectsSourcesFindingsSetMute` - Updates the mute state of a finding.
* `securitycenterProjectsSourcesFindingsSetState` - Updates the state of a finding.
* `securitycenterProjectsSourcesList` - Lists all sources belonging to an organization.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
