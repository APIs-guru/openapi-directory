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
import { TagmanagerAccountsContainersCombineRequest, TagmanagerAccountsContainersCombineResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: TagmanagerAccountsContainersCombineRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    path: "quia",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "blanditiis",
    allowUserPermissionFeatureUpdate: true,
    alt: "media",
    callback: "quibusdam",
    containerId: "ad",
    fields: "labore",
    key: "quo",
    oauthToken: "excepturi",
    prettyPrint: false,
    quotaUser: "dolore",
    settingSource: "settingSourceUnspecified",
    uploadType: "consequatur",
    uploadProtocol: "commodi",
  },
};

sdk.accounts.tagmanagerAccountsContainersCombine(req).then((res: TagmanagerAccountsContainersCombineResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accounts

* `tagmanagerAccountsContainersCombine` - Combines Containers.
* `tagmanagerAccountsContainersCreate` - Creates a Container.
* `tagmanagerAccountsContainersDestinationsLink` - Adds a Destination to this Container and removes it from the Container to which it is currently linked.
* `tagmanagerAccountsContainersDestinationsList` - Lists all Destinations linked to a GTM Container.
* `tagmanagerAccountsContainersEnvironmentsCreate` - Creates a GTM Environment.
* `tagmanagerAccountsContainersEnvironmentsList` - Lists all GTM Environments of a GTM Container.
* `tagmanagerAccountsContainersEnvironmentsReauthorize` - Re-generates the authorization code for a GTM Environment.
* `tagmanagerAccountsContainersList` - Lists all Containers that belongs to a GTM Account.
* `tagmanagerAccountsContainersLookup` - Looks up a Container by destination ID.
* `tagmanagerAccountsContainersMoveTagId` - Move Tag ID out of a Container.
* `tagmanagerAccountsContainersSnippet` - Gets the tagging snippet for a Container.
* `tagmanagerAccountsContainersVersionHeadersLatest` - Gets the latest container version header
* `tagmanagerAccountsContainersVersionHeadersList` - Lists all Container Versions of a GTM Container.
* `tagmanagerAccountsContainersVersionsLive` - Gets the live (i.e. published) container version
* `tagmanagerAccountsContainersVersionsPublish` - Publishes a Container Version.
* `tagmanagerAccountsContainersVersionsSetLatest` - Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.
* `tagmanagerAccountsContainersVersionsUndelete` - Undeletes a Container Version.
* `tagmanagerAccountsContainersWorkspacesBuiltInVariablesCreate` - Creates one or more GTM Built-In Variables.
* `tagmanagerAccountsContainersWorkspacesBuiltInVariablesList` - Lists all the enabled Built-In Variables of a GTM Container.
* `tagmanagerAccountsContainersWorkspacesBuiltInVariablesRevert` - Reverts changes to a GTM Built-In Variables in a GTM Workspace.
* `tagmanagerAccountsContainersWorkspacesClientsCreate` - Creates a GTM Client.
* `tagmanagerAccountsContainersWorkspacesClientsList` - Lists all GTM Clients of a GTM container workspace.
* `tagmanagerAccountsContainersWorkspacesCreate` - Creates a Workspace.
* `tagmanagerAccountsContainersWorkspacesCreateVersion` - Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.
* `tagmanagerAccountsContainersWorkspacesFoldersCreate` - Creates a GTM Folder.
* `tagmanagerAccountsContainersWorkspacesFoldersEntities` - List all entities in a GTM Folder.
* `tagmanagerAccountsContainersWorkspacesFoldersList` - Lists all GTM Folders of a Container.
* `tagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolder` - Moves entities to a GTM Folder.
* `tagmanagerAccountsContainersWorkspacesGetStatus` - Finds conflicting and modified entities in the workspace.
* `tagmanagerAccountsContainersWorkspacesGtagConfigCreate` - Creates a Google tag config.
* `tagmanagerAccountsContainersWorkspacesGtagConfigList` - Lists all Google tag configs in a Container.
* `tagmanagerAccountsContainersWorkspacesList` - Lists all Workspaces that belong to a GTM Container.
* `tagmanagerAccountsContainersWorkspacesQuickPreview` - Quick previews a workspace by creating a fake container version from all entities in the provided workspace.
* `tagmanagerAccountsContainersWorkspacesResolveConflict` - Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.
* `tagmanagerAccountsContainersWorkspacesSync` - Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.
* `tagmanagerAccountsContainersWorkspacesTagsCreate` - Creates a GTM Tag.
* `tagmanagerAccountsContainersWorkspacesTagsList` - Lists all GTM Tags of a Container.
* `tagmanagerAccountsContainersWorkspacesTemplatesCreate` - Creates a GTM Custom Template.
* `tagmanagerAccountsContainersWorkspacesTemplatesList` - Lists all GTM Templates of a GTM container workspace.
* `tagmanagerAccountsContainersWorkspacesTriggersCreate` - Creates a GTM Trigger.
* `tagmanagerAccountsContainersWorkspacesTriggersList` - Lists all GTM Triggers of a Container.
* `tagmanagerAccountsContainersWorkspacesVariablesCreate` - Creates a GTM Variable.
* `tagmanagerAccountsContainersWorkspacesVariablesList` - Lists all GTM Variables of a Container.
* `tagmanagerAccountsContainersWorkspacesZonesCreate` - Creates a GTM Zone.
* `tagmanagerAccountsContainersWorkspacesZonesList` - Lists all GTM Zones of a GTM container workspace.
* `tagmanagerAccountsContainersWorkspacesZonesRevert` - Reverts changes to a GTM Zone in a GTM Workspace.
* `tagmanagerAccountsList` - Lists all GTM Accounts that a user has access to.
* `tagmanagerAccountsUserPermissionsCreate` - Creates a user's Account & Container access.
* `tagmanagerAccountsUserPermissionsDelete` - Removes a user from the account, revoking access to it and all of its containers.
* `tagmanagerAccountsUserPermissionsGet` - Gets a user's Account & Container access.
* `tagmanagerAccountsUserPermissionsList` - List all users that have access to the account along with Account and Container user access granted to each of them.
* `tagmanagerAccountsUserPermissionsUpdate` - Updates a user's Account & Container access.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
