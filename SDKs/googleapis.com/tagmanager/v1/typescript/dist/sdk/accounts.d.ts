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
     * tagmanagerAccountsContainersCreate - Creates a Container.
    **/
    tagmanagerAccountsContainersCreate(req: operations.TagmanagerAccountsContainersCreateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersCreateResponse>;
    /**
     * tagmanagerAccountsContainersDelete - Deletes a Container.
    **/
    tagmanagerAccountsContainersDelete(req: operations.TagmanagerAccountsContainersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersDeleteResponse>;
    /**
     * tagmanagerAccountsContainersEnvironmentsCreate - Creates a GTM Environment.
    **/
    tagmanagerAccountsContainersEnvironmentsCreate(req: operations.TagmanagerAccountsContainersEnvironmentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersEnvironmentsCreateResponse>;
    /**
     * tagmanagerAccountsContainersEnvironmentsDelete - Deletes a GTM Environment.
    **/
    tagmanagerAccountsContainersEnvironmentsDelete(req: operations.TagmanagerAccountsContainersEnvironmentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersEnvironmentsDeleteResponse>;
    /**
     * tagmanagerAccountsContainersEnvironmentsGet - Gets a GTM Environment.
    **/
    tagmanagerAccountsContainersEnvironmentsGet(req: operations.TagmanagerAccountsContainersEnvironmentsGetRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersEnvironmentsGetResponse>;
    /**
     * tagmanagerAccountsContainersEnvironmentsList - Lists all GTM Environments of a GTM Container.
    **/
    tagmanagerAccountsContainersEnvironmentsList(req: operations.TagmanagerAccountsContainersEnvironmentsListRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersEnvironmentsListResponse>;
    /**
     * tagmanagerAccountsContainersEnvironmentsUpdate - Updates a GTM Environment.
    **/
    tagmanagerAccountsContainersEnvironmentsUpdate(req: operations.TagmanagerAccountsContainersEnvironmentsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersEnvironmentsUpdateResponse>;
    /**
     * tagmanagerAccountsContainersFoldersCreate - Creates a GTM Folder.
    **/
    tagmanagerAccountsContainersFoldersCreate(req: operations.TagmanagerAccountsContainersFoldersCreateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersFoldersCreateResponse>;
    /**
     * tagmanagerAccountsContainersFoldersDelete - Deletes a GTM Folder.
    **/
    tagmanagerAccountsContainersFoldersDelete(req: operations.TagmanagerAccountsContainersFoldersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersFoldersDeleteResponse>;
    /**
     * tagmanagerAccountsContainersFoldersEntitiesList - List all entities in a GTM Folder.
    **/
    tagmanagerAccountsContainersFoldersEntitiesList(req: operations.TagmanagerAccountsContainersFoldersEntitiesListRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersFoldersEntitiesListResponse>;
    /**
     * tagmanagerAccountsContainersFoldersGet - Gets a GTM Folder.
    **/
    tagmanagerAccountsContainersFoldersGet(req: operations.TagmanagerAccountsContainersFoldersGetRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersFoldersGetResponse>;
    /**
     * tagmanagerAccountsContainersFoldersList - Lists all GTM Folders of a Container.
    **/
    tagmanagerAccountsContainersFoldersList(req: operations.TagmanagerAccountsContainersFoldersListRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersFoldersListResponse>;
    /**
     * tagmanagerAccountsContainersFoldersUpdate - Updates a GTM Folder.
    **/
    tagmanagerAccountsContainersFoldersUpdate(req: operations.TagmanagerAccountsContainersFoldersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersFoldersUpdateResponse>;
    /**
     * tagmanagerAccountsContainersGet - Gets a Container.
    **/
    tagmanagerAccountsContainersGet(req: operations.TagmanagerAccountsContainersGetRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersGetResponse>;
    /**
     * tagmanagerAccountsContainersList - Lists all Containers that belongs to a GTM Account.
    **/
    tagmanagerAccountsContainersList(req: operations.TagmanagerAccountsContainersListRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersListResponse>;
    /**
     * tagmanagerAccountsContainersMoveFoldersUpdate - Moves entities to a GTM Folder.
    **/
    tagmanagerAccountsContainersMoveFoldersUpdate(req: operations.TagmanagerAccountsContainersMoveFoldersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersMoveFoldersUpdateResponse>;
    /**
     * tagmanagerAccountsContainersReauthorizeEnvironmentsUpdate - Re-generates the authorization code for a GTM Environment.
    **/
    tagmanagerAccountsContainersReauthorizeEnvironmentsUpdate(req: operations.TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateResponse>;
    /**
     * tagmanagerAccountsContainersTagsCreate - Creates a GTM Tag.
    **/
    tagmanagerAccountsContainersTagsCreate(req: operations.TagmanagerAccountsContainersTagsCreateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersTagsCreateResponse>;
    /**
     * tagmanagerAccountsContainersTagsDelete - Deletes a GTM Tag.
    **/
    tagmanagerAccountsContainersTagsDelete(req: operations.TagmanagerAccountsContainersTagsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersTagsDeleteResponse>;
    /**
     * tagmanagerAccountsContainersTagsGet - Gets a GTM Tag.
    **/
    tagmanagerAccountsContainersTagsGet(req: operations.TagmanagerAccountsContainersTagsGetRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersTagsGetResponse>;
    /**
     * tagmanagerAccountsContainersTagsList - Lists all GTM Tags of a Container.
    **/
    tagmanagerAccountsContainersTagsList(req: operations.TagmanagerAccountsContainersTagsListRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersTagsListResponse>;
    /**
     * tagmanagerAccountsContainersTagsUpdate - Updates a GTM Tag.
    **/
    tagmanagerAccountsContainersTagsUpdate(req: operations.TagmanagerAccountsContainersTagsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersTagsUpdateResponse>;
    /**
     * tagmanagerAccountsContainersTriggersCreate - Creates a GTM Trigger.
    **/
    tagmanagerAccountsContainersTriggersCreate(req: operations.TagmanagerAccountsContainersTriggersCreateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersTriggersCreateResponse>;
    /**
     * tagmanagerAccountsContainersTriggersDelete - Deletes a GTM Trigger.
    **/
    tagmanagerAccountsContainersTriggersDelete(req: operations.TagmanagerAccountsContainersTriggersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersTriggersDeleteResponse>;
    /**
     * tagmanagerAccountsContainersTriggersGet - Gets a GTM Trigger.
    **/
    tagmanagerAccountsContainersTriggersGet(req: operations.TagmanagerAccountsContainersTriggersGetRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersTriggersGetResponse>;
    /**
     * tagmanagerAccountsContainersTriggersList - Lists all GTM Triggers of a Container.
    **/
    tagmanagerAccountsContainersTriggersList(req: operations.TagmanagerAccountsContainersTriggersListRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersTriggersListResponse>;
    /**
     * tagmanagerAccountsContainersTriggersUpdate - Updates a GTM Trigger.
    **/
    tagmanagerAccountsContainersTriggersUpdate(req: operations.TagmanagerAccountsContainersTriggersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersTriggersUpdateResponse>;
    /**
     * tagmanagerAccountsContainersUpdate - Updates a Container.
    **/
    tagmanagerAccountsContainersUpdate(req: operations.TagmanagerAccountsContainersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersUpdateResponse>;
    /**
     * tagmanagerAccountsContainersVariablesCreate - Creates a GTM Variable.
    **/
    tagmanagerAccountsContainersVariablesCreate(req: operations.TagmanagerAccountsContainersVariablesCreateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVariablesCreateResponse>;
    /**
     * tagmanagerAccountsContainersVariablesDelete - Deletes a GTM Variable.
    **/
    tagmanagerAccountsContainersVariablesDelete(req: operations.TagmanagerAccountsContainersVariablesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVariablesDeleteResponse>;
    /**
     * tagmanagerAccountsContainersVariablesGet - Gets a GTM Variable.
    **/
    tagmanagerAccountsContainersVariablesGet(req: operations.TagmanagerAccountsContainersVariablesGetRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVariablesGetResponse>;
    /**
     * tagmanagerAccountsContainersVariablesList - Lists all GTM Variables of a Container.
    **/
    tagmanagerAccountsContainersVariablesList(req: operations.TagmanagerAccountsContainersVariablesListRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVariablesListResponse>;
    /**
     * tagmanagerAccountsContainersVariablesUpdate - Updates a GTM Variable.
    **/
    tagmanagerAccountsContainersVariablesUpdate(req: operations.TagmanagerAccountsContainersVariablesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVariablesUpdateResponse>;
    /**
     * tagmanagerAccountsContainersVersionsCreate - Creates a Container Version.
    **/
    tagmanagerAccountsContainersVersionsCreate(req: operations.TagmanagerAccountsContainersVersionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVersionsCreateResponse>;
    /**
     * tagmanagerAccountsContainersVersionsDelete - Deletes a Container Version.
    **/
    tagmanagerAccountsContainersVersionsDelete(req: operations.TagmanagerAccountsContainersVersionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVersionsDeleteResponse>;
    /**
     * tagmanagerAccountsContainersVersionsGet - Gets a Container Version.
    **/
    tagmanagerAccountsContainersVersionsGet(req: operations.TagmanagerAccountsContainersVersionsGetRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVersionsGetResponse>;
    /**
     * tagmanagerAccountsContainersVersionsList - Lists all Container Versions of a GTM Container.
    **/
    tagmanagerAccountsContainersVersionsList(req: operations.TagmanagerAccountsContainersVersionsListRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVersionsListResponse>;
    /**
     * tagmanagerAccountsContainersVersionsPublish - Publishes a Container Version.
    **/
    tagmanagerAccountsContainersVersionsPublish(req: operations.TagmanagerAccountsContainersVersionsPublishRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVersionsPublishResponse>;
    /**
     * tagmanagerAccountsContainersVersionsRestore - Restores a Container Version. This will overwrite the container's current configuration (including its variables, triggers and tags). The operation will not have any effect on the version that is being served (i.e. the published version).
    **/
    tagmanagerAccountsContainersVersionsRestore(req: operations.TagmanagerAccountsContainersVersionsRestoreRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVersionsRestoreResponse>;
    /**
     * tagmanagerAccountsContainersVersionsUndelete - Undeletes a Container Version.
    **/
    tagmanagerAccountsContainersVersionsUndelete(req: operations.TagmanagerAccountsContainersVersionsUndeleteRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVersionsUndeleteResponse>;
    /**
     * tagmanagerAccountsContainersVersionsUpdate - Updates a Container Version.
    **/
    tagmanagerAccountsContainersVersionsUpdate(req: operations.TagmanagerAccountsContainersVersionsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsContainersVersionsUpdateResponse>;
    /**
     * tagmanagerAccountsGet - Gets a GTM Account.
    **/
    tagmanagerAccountsGet(req: operations.TagmanagerAccountsGetRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsGetResponse>;
    /**
     * tagmanagerAccountsList - Lists all GTM Accounts that a user has access to.
    **/
    tagmanagerAccountsList(req: operations.TagmanagerAccountsListRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsListResponse>;
    /**
     * tagmanagerAccountsPermissionsCreate - Creates a user's Account & Container Permissions.
    **/
    tagmanagerAccountsPermissionsCreate(req: operations.TagmanagerAccountsPermissionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsPermissionsCreateResponse>;
    /**
     * tagmanagerAccountsPermissionsDelete - Removes a user from the account, revoking access to it and all of its containers.
    **/
    tagmanagerAccountsPermissionsDelete(req: operations.TagmanagerAccountsPermissionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsPermissionsDeleteResponse>;
    /**
     * tagmanagerAccountsPermissionsGet - Gets a user's Account & Container Permissions.
    **/
    tagmanagerAccountsPermissionsGet(req: operations.TagmanagerAccountsPermissionsGetRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsPermissionsGetResponse>;
    /**
     * tagmanagerAccountsPermissionsList - List all users that have access to the account along with Account and Container Permissions granted to each of them.
    **/
    tagmanagerAccountsPermissionsList(req: operations.TagmanagerAccountsPermissionsListRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsPermissionsListResponse>;
    /**
     * tagmanagerAccountsPermissionsUpdate - Updates a user's Account & Container Permissions.
    **/
    tagmanagerAccountsPermissionsUpdate(req: operations.TagmanagerAccountsPermissionsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsPermissionsUpdateResponse>;
    /**
     * tagmanagerAccountsUpdate - Updates a GTM Account.
    **/
    tagmanagerAccountsUpdate(req: operations.TagmanagerAccountsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TagmanagerAccountsUpdateResponse>;
}
