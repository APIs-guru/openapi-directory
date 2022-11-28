import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Labels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * drivelabelsLabelsCreate - Creates a new Label.
    **/
    drivelabelsLabelsCreate(req: operations.DrivelabelsLabelsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DrivelabelsLabelsCreateResponse>;
    /**
     * drivelabelsLabelsDelta - Updates a single Label by applying a set of update requests resulting in a new draft revision. The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive Items.
    **/
    drivelabelsLabelsDelta(req: operations.DrivelabelsLabelsDeltaRequest, config?: AxiosRequestConfig): Promise<operations.DrivelabelsLabelsDeltaResponse>;
    /**
     * drivelabelsLabelsDisable - Disable a published Label. Disabling a Label will result in a new disabled published revision based on the current published revision. If there is a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`.
    **/
    drivelabelsLabelsDisable(req: operations.DrivelabelsLabelsDisableRequest, config?: AxiosRequestConfig): Promise<operations.DrivelabelsLabelsDisableResponse>;
    /**
     * drivelabelsLabelsEnable - Enable a disabled Label and restore it to its published state. This will result in a new published revision based on the current disabled published revision. If there is an existing disabled draft revision, a new revision will be created based on that draft and will be enabled.
    **/
    drivelabelsLabelsEnable(req: operations.DrivelabelsLabelsEnableRequest, config?: AxiosRequestConfig): Promise<operations.DrivelabelsLabelsEnableResponse>;
    /**
     * drivelabelsLabelsList - List labels.
    **/
    drivelabelsLabelsList(req: operations.DrivelabelsLabelsListRequest, config?: AxiosRequestConfig): Promise<operations.DrivelabelsLabelsListResponse>;
    /**
     * drivelabelsLabelsPublish - Publish all draft changes to the Label. Once published, the Label may not return to its draft state. See `google.apps.drive.labels.v2.Lifecycle` for more information. Publishing a Label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the Label will be rejected. For example, the following changes to a Label will be rejected after the Label is published: * The label cannot be directly deleted. It must be disabled first, then deleted. * Field.FieldType cannot be changed. * Changes to Field validation options cannot reject something that was previously accepted. * Reducing the max entries.
    **/
    drivelabelsLabelsPublish(req: operations.DrivelabelsLabelsPublishRequest, config?: AxiosRequestConfig): Promise<operations.DrivelabelsLabelsPublishResponse>;
    /**
     * drivelabelsLabelsRevisionsLocksList - Lists the LabelLocks on a Label.
    **/
    drivelabelsLabelsRevisionsLocksList(req: operations.DrivelabelsLabelsRevisionsLocksListRequest, config?: AxiosRequestConfig): Promise<operations.DrivelabelsLabelsRevisionsLocksListResponse>;
    /**
     * drivelabelsLabelsRevisionsPermissionsBatchDelete - Deletes Label permissions. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
    **/
    drivelabelsLabelsRevisionsPermissionsBatchDelete(req: operations.DrivelabelsLabelsRevisionsPermissionsBatchDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DrivelabelsLabelsRevisionsPermissionsBatchDeleteResponse>;
    /**
     * drivelabelsLabelsRevisionsPermissionsBatchUpdate - Updates Label permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
    **/
    drivelabelsLabelsRevisionsPermissionsBatchUpdate(req: operations.DrivelabelsLabelsRevisionsPermissionsBatchUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DrivelabelsLabelsRevisionsPermissionsBatchUpdateResponse>;
    /**
     * drivelabelsLabelsRevisionsPermissionsCreate - Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
    **/
    drivelabelsLabelsRevisionsPermissionsCreate(req: operations.DrivelabelsLabelsRevisionsPermissionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DrivelabelsLabelsRevisionsPermissionsCreateResponse>;
    /**
     * drivelabelsLabelsRevisionsPermissionsDelete - Deletes a Label's permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
    **/
    drivelabelsLabelsRevisionsPermissionsDelete(req: operations.DrivelabelsLabelsRevisionsPermissionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DrivelabelsLabelsRevisionsPermissionsDeleteResponse>;
    /**
     * drivelabelsLabelsRevisionsPermissionsList - Lists a Label's permissions.
    **/
    drivelabelsLabelsRevisionsPermissionsList(req: operations.DrivelabelsLabelsRevisionsPermissionsListRequest, config?: AxiosRequestConfig): Promise<operations.DrivelabelsLabelsRevisionsPermissionsListResponse>;
    /**
     * drivelabelsLabelsRevisionsUpdatePermissions - Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
    **/
    drivelabelsLabelsRevisionsUpdatePermissions(req: operations.DrivelabelsLabelsRevisionsUpdatePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.DrivelabelsLabelsRevisionsUpdatePermissionsResponse>;
    /**
     * drivelabelsLabelsUpdateLabelCopyMode - Updates a Label's `CopyMode`. Changes to this policy are not revisioned, do not require publishing, and take effect immediately.
    **/
    drivelabelsLabelsUpdateLabelCopyMode(req: operations.DrivelabelsLabelsUpdateLabelCopyModeRequest, config?: AxiosRequestConfig): Promise<operations.DrivelabelsLabelsUpdateLabelCopyModeResponse>;
}
