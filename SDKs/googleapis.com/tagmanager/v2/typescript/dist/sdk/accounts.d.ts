import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * tagmanagerAccountsContainersCombine - Combines Containers.
    **/
    tagmanagerAccountsContainersCombine(req: operations.TagmanagerAccountsContainersCombineRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersCombineResponse>;
    /**
     * tagmanagerAccountsContainersCreate - Creates a Container.
    **/
    tagmanagerAccountsContainersCreate(req: operations.TagmanagerAccountsContainersCreateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersCreateResponse>;
    /**
     * tagmanagerAccountsContainersDestinationsLink - Adds a Destination to this Container and removes it from the Container to which it is currently linked.
    **/
    tagmanagerAccountsContainersDestinationsLink(req: operations.TagmanagerAccountsContainersDestinationsLinkRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersDestinationsLinkResponse>;
    /**
     * tagmanagerAccountsContainersDestinationsList - Lists all Destinations linked to a GTM Container.
    **/
    tagmanagerAccountsContainersDestinationsList(req: operations.TagmanagerAccountsContainersDestinationsListRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersDestinationsListResponse>;
    /**
     * tagmanagerAccountsContainersEnvironmentsCreate - Creates a GTM Environment.
    **/
    tagmanagerAccountsContainersEnvironmentsCreate(req: operations.TagmanagerAccountsContainersEnvironmentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersEnvironmentsCreateResponse>;
    /**
     * tagmanagerAccountsContainersEnvironmentsList - Lists all GTM Environments of a GTM Container.
    **/
    tagmanagerAccountsContainersEnvironmentsList(req: operations.TagmanagerAccountsContainersEnvironmentsListRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersEnvironmentsListResponse>;
    /**
     * tagmanagerAccountsContainersEnvironmentsReauthorize - Re-generates the authorization code for a GTM Environment.
    **/
    tagmanagerAccountsContainersEnvironmentsReauthorize(req: operations.TagmanagerAccountsContainersEnvironmentsReauthorizeRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersEnvironmentsReauthorizeResponse>;
    /**
     * tagmanagerAccountsContainersList - Lists all Containers that belongs to a GTM Account.
    **/
    tagmanagerAccountsContainersList(req: operations.TagmanagerAccountsContainersListRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersListResponse>;
    /**
     * tagmanagerAccountsContainersLookup - Looks up a Container by destination ID.
    **/
    tagmanagerAccountsContainersLookup(req: operations.TagmanagerAccountsContainersLookupRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersLookupResponse>;
    /**
     * tagmanagerAccountsContainersMoveTagId - Move Tag ID out of a Container.
    **/
    tagmanagerAccountsContainersMoveTagId(req: operations.TagmanagerAccountsContainersMoveTagIdRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersMoveTagIdResponse>;
    /**
     * tagmanagerAccountsContainersSnippet - Gets the tagging snippet for a Container.
    **/
    tagmanagerAccountsContainersSnippet(req: operations.TagmanagerAccountsContainersSnippetRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersSnippetResponse>;
    /**
     * tagmanagerAccountsContainersVersionHeadersLatest - Gets the latest container version header
    **/
    tagmanagerAccountsContainersVersionHeadersLatest(req: operations.TagmanagerAccountsContainersVersionHeadersLatestRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVersionHeadersLatestResponse>;
    /**
     * tagmanagerAccountsContainersVersionHeadersList - Lists all Container Versions of a GTM Container.
    **/
    tagmanagerAccountsContainersVersionHeadersList(req: operations.TagmanagerAccountsContainersVersionHeadersListRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVersionHeadersListResponse>;
    /**
     * tagmanagerAccountsContainersVersionsLive - Gets the live (i.e. published) container version
    **/
    tagmanagerAccountsContainersVersionsLive(req: operations.TagmanagerAccountsContainersVersionsLiveRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVersionsLiveResponse>;
    /**
     * tagmanagerAccountsContainersVersionsPublish - Publishes a Container Version.
    **/
    tagmanagerAccountsContainersVersionsPublish(req: operations.TagmanagerAccountsContainersVersionsPublishRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVersionsPublishResponse>;
    /**
     * tagmanagerAccountsContainersVersionsSetLatest - Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.
    **/
    tagmanagerAccountsContainersVersionsSetLatest(req: operations.TagmanagerAccountsContainersVersionsSetLatestRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVersionsSetLatestResponse>;
    /**
     * tagmanagerAccountsContainersVersionsUndelete - Undeletes a Container Version.
    **/
    tagmanagerAccountsContainersVersionsUndelete(req: operations.TagmanagerAccountsContainersVersionsUndeleteRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVersionsUndeleteResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesBuiltInVariablesCreate - Creates one or more GTM Built-In Variables.
    **/
    tagmanagerAccountsContainersWorkspacesBuiltInVariablesCreate(req: operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreateResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesBuiltInVariablesList - Lists all the enabled Built-In Variables of a GTM Container.
    **/
    tagmanagerAccountsContainersWorkspacesBuiltInVariablesList(req: operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesListRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesListResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesBuiltInVariablesRevert - Reverts changes to a GTM Built-In Variables in a GTM Workspace.
    **/
    tagmanagerAccountsContainersWorkspacesBuiltInVariablesRevert(req: operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevertResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesClientsCreate - Creates a GTM Client.
    **/
    tagmanagerAccountsContainersWorkspacesClientsCreate(req: operations.TagmanagerAccountsContainersWorkspacesClientsCreateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesClientsCreateResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesClientsList - Lists all GTM Clients of a GTM container workspace.
    **/
    tagmanagerAccountsContainersWorkspacesClientsList(req: operations.TagmanagerAccountsContainersWorkspacesClientsListRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesClientsListResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesCreate - Creates a Workspace.
    **/
    tagmanagerAccountsContainersWorkspacesCreate(req: operations.TagmanagerAccountsContainersWorkspacesCreateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesCreateResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesCreateVersion - Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.
    **/
    tagmanagerAccountsContainersWorkspacesCreateVersion(req: operations.TagmanagerAccountsContainersWorkspacesCreateVersionRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesCreateVersionResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesFoldersCreate - Creates a GTM Folder.
    **/
    tagmanagerAccountsContainersWorkspacesFoldersCreate(req: operations.TagmanagerAccountsContainersWorkspacesFoldersCreateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesFoldersCreateResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesFoldersEntities - List all entities in a GTM Folder.
    **/
    tagmanagerAccountsContainersWorkspacesFoldersEntities(req: operations.TagmanagerAccountsContainersWorkspacesFoldersEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesFoldersEntitiesResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesFoldersList - Lists all GTM Folders of a Container.
    **/
    tagmanagerAccountsContainersWorkspacesFoldersList(req: operations.TagmanagerAccountsContainersWorkspacesFoldersListRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesFoldersListResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolder - Moves entities to a GTM Folder.
    **/
    tagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolder(req: operations.TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesGetStatus - Finds conflicting and modified entities in the workspace.
    **/
    tagmanagerAccountsContainersWorkspacesGetStatus(req: operations.TagmanagerAccountsContainersWorkspacesGetStatusRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesGetStatusResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesGtagConfigCreate - Creates a Google tag config.
    **/
    tagmanagerAccountsContainersWorkspacesGtagConfigCreate(req: operations.TagmanagerAccountsContainersWorkspacesGtagConfigCreateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesGtagConfigCreateResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesGtagConfigList - Lists all Google tag configs in a Container.
    **/
    tagmanagerAccountsContainersWorkspacesGtagConfigList(req: operations.TagmanagerAccountsContainersWorkspacesGtagConfigListRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesGtagConfigListResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesList - Lists all Workspaces that belong to a GTM Container.
    **/
    tagmanagerAccountsContainersWorkspacesList(req: operations.TagmanagerAccountsContainersWorkspacesListRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesListResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesQuickPreview - Quick previews a workspace by creating a fake container version from all entities in the provided workspace.
    **/
    tagmanagerAccountsContainersWorkspacesQuickPreview(req: operations.TagmanagerAccountsContainersWorkspacesQuickPreviewRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesQuickPreviewResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesResolveConflict - Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.
    **/
    tagmanagerAccountsContainersWorkspacesResolveConflict(req: operations.TagmanagerAccountsContainersWorkspacesResolveConflictRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesResolveConflictResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesSync - Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.
    **/
    tagmanagerAccountsContainersWorkspacesSync(req: operations.TagmanagerAccountsContainersWorkspacesSyncRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesSyncResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesTagsCreate - Creates a GTM Tag.
    **/
    tagmanagerAccountsContainersWorkspacesTagsCreate(req: operations.TagmanagerAccountsContainersWorkspacesTagsCreateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesTagsCreateResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesTagsList - Lists all GTM Tags of a Container.
    **/
    tagmanagerAccountsContainersWorkspacesTagsList(req: operations.TagmanagerAccountsContainersWorkspacesTagsListRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesTagsListResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesTemplatesCreate - Creates a GTM Custom Template.
    **/
    tagmanagerAccountsContainersWorkspacesTemplatesCreate(req: operations.TagmanagerAccountsContainersWorkspacesTemplatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesTemplatesCreateResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesTemplatesList - Lists all GTM Templates of a GTM container workspace.
    **/
    tagmanagerAccountsContainersWorkspacesTemplatesList(req: operations.TagmanagerAccountsContainersWorkspacesTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesTemplatesListResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesTriggersCreate - Creates a GTM Trigger.
    **/
    tagmanagerAccountsContainersWorkspacesTriggersCreate(req: operations.TagmanagerAccountsContainersWorkspacesTriggersCreateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesTriggersCreateResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesTriggersList - Lists all GTM Triggers of a Container.
    **/
    tagmanagerAccountsContainersWorkspacesTriggersList(req: operations.TagmanagerAccountsContainersWorkspacesTriggersListRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesTriggersListResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesVariablesCreate - Creates a GTM Variable.
    **/
    tagmanagerAccountsContainersWorkspacesVariablesCreate(req: operations.TagmanagerAccountsContainersWorkspacesVariablesCreateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesVariablesCreateResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesVariablesList - Lists all GTM Variables of a Container.
    **/
    tagmanagerAccountsContainersWorkspacesVariablesList(req: operations.TagmanagerAccountsContainersWorkspacesVariablesListRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesVariablesListResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesZonesCreate - Creates a GTM Zone.
    **/
    tagmanagerAccountsContainersWorkspacesZonesCreate(req: operations.TagmanagerAccountsContainersWorkspacesZonesCreateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesZonesCreateResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesZonesList - Lists all GTM Zones of a GTM container workspace.
    **/
    tagmanagerAccountsContainersWorkspacesZonesList(req: operations.TagmanagerAccountsContainersWorkspacesZonesListRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesZonesListResponse>;
    /**
     * tagmanagerAccountsContainersWorkspacesZonesRevert - Reverts changes to a GTM Zone in a GTM Workspace.
    **/
    tagmanagerAccountsContainersWorkspacesZonesRevert(req: operations.TagmanagerAccountsContainersWorkspacesZonesRevertRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersWorkspacesZonesRevertResponse>;
    /**
     * tagmanagerAccountsList - Lists all GTM Accounts that a user has access to.
    **/
    tagmanagerAccountsList(req: operations.TagmanagerAccountsListRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsListResponse>;
    /**
     * tagmanagerAccountsUserPermissionsCreate - Creates a user's Account & Container access.
    **/
    tagmanagerAccountsUserPermissionsCreate(req: operations.TagmanagerAccountsUserPermissionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsUserPermissionsCreateResponse>;
    /**
     * tagmanagerAccountsUserPermissionsDelete - Removes a user from the account, revoking access to it and all of its containers.
    **/
    tagmanagerAccountsUserPermissionsDelete(req: operations.TagmanagerAccountsUserPermissionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsUserPermissionsDeleteResponse>;
    /**
     * tagmanagerAccountsUserPermissionsGet - Gets a user's Account & Container access.
    **/
    tagmanagerAccountsUserPermissionsGet(req: operations.TagmanagerAccountsUserPermissionsGetRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsUserPermissionsGetResponse>;
    /**
     * tagmanagerAccountsUserPermissionsList - List all users that have access to the account along with Account and Container user access granted to each of them.
    **/
    tagmanagerAccountsUserPermissionsList(req: operations.TagmanagerAccountsUserPermissionsListRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsUserPermissionsListResponse>;
    /**
     * tagmanagerAccountsUserPermissionsUpdate - Updates a user's Account & Container access.
    **/
    tagmanagerAccountsUserPermissionsUpdate(req: operations.TagmanagerAccountsUserPermissionsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsUserPermissionsUpdateResponse>;
}
