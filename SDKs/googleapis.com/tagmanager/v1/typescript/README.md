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
import { TagmanagerAccountsContainersCreateRequest, TagmanagerAccountsContainersCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: TagmanagerAccountsContainersCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    accountId: "repellat",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "nulla",
    alt: "json",
    callback: "earum",
    fields: "reiciendis",
    key: "qui",
    oauthToken: "aspernatur",
    prettyPrint: false,
    quotaUser: "aliquam",
    uploadType: "magnam",
    uploadProtocol: "ratione",
  },
  request: {
    accountId: "non",
    containerId: "ea",
    domainName: [
      "ab",
      "et",
    ],
    enabledBuiltInVariable: [
      "event",
    ],
    fingerprint: "doloribus",
    name: "aut",
    notes: "autem",
    publicId: "iusto",
    timeZoneCountryId: "recusandae",
    timeZoneId: "itaque",
    usageContext: [
      "android",
      "iosSdk5",
      "android",
    ],
  },
};

sdk.accounts.tagmanagerAccountsContainersCreate(req).then((res: TagmanagerAccountsContainersCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accounts

* `tagmanagerAccountsContainersCreate` - Creates a Container.
* `tagmanagerAccountsContainersDelete` - Deletes a Container.
* `tagmanagerAccountsContainersEnvironmentsCreate` - Creates a GTM Environment.
* `tagmanagerAccountsContainersEnvironmentsDelete` - Deletes a GTM Environment.
* `tagmanagerAccountsContainersEnvironmentsGet` - Gets a GTM Environment.
* `tagmanagerAccountsContainersEnvironmentsList` - Lists all GTM Environments of a GTM Container.
* `tagmanagerAccountsContainersEnvironmentsUpdate` - Updates a GTM Environment.
* `tagmanagerAccountsContainersFoldersCreate` - Creates a GTM Folder.
* `tagmanagerAccountsContainersFoldersDelete` - Deletes a GTM Folder.
* `tagmanagerAccountsContainersFoldersEntitiesList` - List all entities in a GTM Folder.
* `tagmanagerAccountsContainersFoldersGet` - Gets a GTM Folder.
* `tagmanagerAccountsContainersFoldersList` - Lists all GTM Folders of a Container.
* `tagmanagerAccountsContainersFoldersUpdate` - Updates a GTM Folder.
* `tagmanagerAccountsContainersGet` - Gets a Container.
* `tagmanagerAccountsContainersList` - Lists all Containers that belongs to a GTM Account.
* `tagmanagerAccountsContainersMoveFoldersUpdate` - Moves entities to a GTM Folder.
* `tagmanagerAccountsContainersReauthorizeEnvironmentsUpdate` - Re-generates the authorization code for a GTM Environment.
* `tagmanagerAccountsContainersTagsCreate` - Creates a GTM Tag.
* `tagmanagerAccountsContainersTagsDelete` - Deletes a GTM Tag.
* `tagmanagerAccountsContainersTagsGet` - Gets a GTM Tag.
* `tagmanagerAccountsContainersTagsList` - Lists all GTM Tags of a Container.
* `tagmanagerAccountsContainersTagsUpdate` - Updates a GTM Tag.
* `tagmanagerAccountsContainersTriggersCreate` - Creates a GTM Trigger.
* `tagmanagerAccountsContainersTriggersDelete` - Deletes a GTM Trigger.
* `tagmanagerAccountsContainersTriggersGet` - Gets a GTM Trigger.
* `tagmanagerAccountsContainersTriggersList` - Lists all GTM Triggers of a Container.
* `tagmanagerAccountsContainersTriggersUpdate` - Updates a GTM Trigger.
* `tagmanagerAccountsContainersUpdate` - Updates a Container.
* `tagmanagerAccountsContainersVariablesCreate` - Creates a GTM Variable.
* `tagmanagerAccountsContainersVariablesDelete` - Deletes a GTM Variable.
* `tagmanagerAccountsContainersVariablesGet` - Gets a GTM Variable.
* `tagmanagerAccountsContainersVariablesList` - Lists all GTM Variables of a Container.
* `tagmanagerAccountsContainersVariablesUpdate` - Updates a GTM Variable.
* `tagmanagerAccountsContainersVersionsCreate` - Creates a Container Version.
* `tagmanagerAccountsContainersVersionsDelete` - Deletes a Container Version.
* `tagmanagerAccountsContainersVersionsGet` - Gets a Container Version.
* `tagmanagerAccountsContainersVersionsList` - Lists all Container Versions of a GTM Container.
* `tagmanagerAccountsContainersVersionsPublish` - Publishes a Container Version.
* `tagmanagerAccountsContainersVersionsRestore` - Restores a Container Version. This will overwrite the container's current configuration (including its variables, triggers and tags). The operation will not have any effect on the version that is being served (i.e. the published version).
* `tagmanagerAccountsContainersVersionsUndelete` - Undeletes a Container Version.
* `tagmanagerAccountsContainersVersionsUpdate` - Updates a Container Version.
* `tagmanagerAccountsGet` - Gets a GTM Account.
* `tagmanagerAccountsList` - Lists all GTM Accounts that a user has access to.
* `tagmanagerAccountsPermissionsCreate` - Creates a user's Account & Container Permissions.
* `tagmanagerAccountsPermissionsDelete` - Removes a user from the account, revoking access to it and all of its containers.
* `tagmanagerAccountsPermissionsGet` - Gets a user's Account & Container Permissions.
* `tagmanagerAccountsPermissionsList` - List all users that have access to the account along with Account and Container Permissions granted to each of them.
* `tagmanagerAccountsPermissionsUpdate` - Updates a user's Account & Container Permissions.
* `tagmanagerAccountsUpdate` - Updates a GTM Account.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
