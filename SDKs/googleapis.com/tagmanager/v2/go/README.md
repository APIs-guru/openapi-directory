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
    
    req := operations.TagmanagerAccountsContainersCombineRequest{
        Security: operations.TagmanagerAccountsContainersCombineSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.TagmanagerAccountsContainersCombinePathParams{
            Path: "quia",
        },
        QueryParams: operations.TagmanagerAccountsContainersCombineQueryParams{
            DollarXgafv: "1",
            AccessToken: "blanditiis",
            AllowUserPermissionFeatureUpdate: true,
            Alt: "media",
            Callback: "quibusdam",
            ContainerID: "ad",
            Fields: "labore",
            Key: "quo",
            OauthToken: "excepturi",
            PrettyPrint: false,
            QuotaUser: "dolore",
            SettingSource: "settingSourceUnspecified",
            UploadType: "consequatur",
            UploadProtocol: "commodi",
        },
    }
    
    res, err := s.Accounts.TagmanagerAccountsContainersCombine(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Container != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accounts

* `TagmanagerAccountsContainersCombine` - Combines Containers.
* `TagmanagerAccountsContainersCreate` - Creates a Container.
* `TagmanagerAccountsContainersDestinationsLink` - Adds a Destination to this Container and removes it from the Container to which it is currently linked.
* `TagmanagerAccountsContainersDestinationsList` - Lists all Destinations linked to a GTM Container.
* `TagmanagerAccountsContainersEnvironmentsCreate` - Creates a GTM Environment.
* `TagmanagerAccountsContainersEnvironmentsList` - Lists all GTM Environments of a GTM Container.
* `TagmanagerAccountsContainersEnvironmentsReauthorize` - Re-generates the authorization code for a GTM Environment.
* `TagmanagerAccountsContainersList` - Lists all Containers that belongs to a GTM Account.
* `TagmanagerAccountsContainersLookup` - Looks up a Container by destination ID.
* `TagmanagerAccountsContainersMoveTagID` - Move Tag ID out of a Container.
* `TagmanagerAccountsContainersSnippet` - Gets the tagging snippet for a Container.
* `TagmanagerAccountsContainersVersionHeadersLatest` - Gets the latest container version header
* `TagmanagerAccountsContainersVersionHeadersList` - Lists all Container Versions of a GTM Container.
* `TagmanagerAccountsContainersVersionsLive` - Gets the live (i.e. published) container version
* `TagmanagerAccountsContainersVersionsPublish` - Publishes a Container Version.
* `TagmanagerAccountsContainersVersionsSetLatest` - Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.
* `TagmanagerAccountsContainersVersionsUndelete` - Undeletes a Container Version.
* `TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreate` - Creates one or more GTM Built-In Variables.
* `TagmanagerAccountsContainersWorkspacesBuiltInVariablesList` - Lists all the enabled Built-In Variables of a GTM Container.
* `TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevert` - Reverts changes to a GTM Built-In Variables in a GTM Workspace.
* `TagmanagerAccountsContainersWorkspacesClientsCreate` - Creates a GTM Client.
* `TagmanagerAccountsContainersWorkspacesClientsList` - Lists all GTM Clients of a GTM container workspace.
* `TagmanagerAccountsContainersWorkspacesCreate` - Creates a Workspace.
* `TagmanagerAccountsContainersWorkspacesCreateVersion` - Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.
* `TagmanagerAccountsContainersWorkspacesFoldersCreate` - Creates a GTM Folder.
* `TagmanagerAccountsContainersWorkspacesFoldersEntities` - List all entities in a GTM Folder.
* `TagmanagerAccountsContainersWorkspacesFoldersList` - Lists all GTM Folders of a Container.
* `TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolder` - Moves entities to a GTM Folder.
* `TagmanagerAccountsContainersWorkspacesGetStatus` - Finds conflicting and modified entities in the workspace.
* `TagmanagerAccountsContainersWorkspacesGtagConfigCreate` - Creates a Google tag config.
* `TagmanagerAccountsContainersWorkspacesGtagConfigList` - Lists all Google tag configs in a Container.
* `TagmanagerAccountsContainersWorkspacesList` - Lists all Workspaces that belong to a GTM Container.
* `TagmanagerAccountsContainersWorkspacesQuickPreview` - Quick previews a workspace by creating a fake container version from all entities in the provided workspace.
* `TagmanagerAccountsContainersWorkspacesResolveConflict` - Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.
* `TagmanagerAccountsContainersWorkspacesSync` - Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.
* `TagmanagerAccountsContainersWorkspacesTagsCreate` - Creates a GTM Tag.
* `TagmanagerAccountsContainersWorkspacesTagsList` - Lists all GTM Tags of a Container.
* `TagmanagerAccountsContainersWorkspacesTemplatesCreate` - Creates a GTM Custom Template.
* `TagmanagerAccountsContainersWorkspacesTemplatesList` - Lists all GTM Templates of a GTM container workspace.
* `TagmanagerAccountsContainersWorkspacesTriggersCreate` - Creates a GTM Trigger.
* `TagmanagerAccountsContainersWorkspacesTriggersList` - Lists all GTM Triggers of a Container.
* `TagmanagerAccountsContainersWorkspacesVariablesCreate` - Creates a GTM Variable.
* `TagmanagerAccountsContainersWorkspacesVariablesList` - Lists all GTM Variables of a Container.
* `TagmanagerAccountsContainersWorkspacesZonesCreate` - Creates a GTM Zone.
* `TagmanagerAccountsContainersWorkspacesZonesList` - Lists all GTM Zones of a GTM container workspace.
* `TagmanagerAccountsContainersWorkspacesZonesRevert` - Reverts changes to a GTM Zone in a GTM Workspace.
* `TagmanagerAccountsList` - Lists all GTM Accounts that a user has access to.
* `TagmanagerAccountsUserPermissionsCreate` - Creates a user's Account & Container access.
* `TagmanagerAccountsUserPermissionsDelete` - Removes a user from the account, revoking access to it and all of its containers.
* `TagmanagerAccountsUserPermissionsGet` - Gets a user's Account & Container access.
* `TagmanagerAccountsUserPermissionsList` - List all users that have access to the account along with Account and Container user access granted to each of them.
* `TagmanagerAccountsUserPermissionsUpdate` - Updates a user's Account & Container access.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
