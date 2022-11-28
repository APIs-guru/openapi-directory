import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * securitycenterProjectsAssetsGroup - Filters an organization's assets and groups them by their specified properties.
    **/
    securitycenterProjectsAssetsGroup(req: operations.SecuritycenterProjectsAssetsGroupRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsAssetsGroupResponse>;
    /**
     * securitycenterProjectsAssetsList - Lists an organization's assets.
    **/
    securitycenterProjectsAssetsList(req: operations.SecuritycenterProjectsAssetsListRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsAssetsListResponse>;
    /**
     * securitycenterProjectsBigQueryExportsCreate - Creates a big query export.
    **/
    securitycenterProjectsBigQueryExportsCreate(req: operations.SecuritycenterProjectsBigQueryExportsCreateRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsBigQueryExportsCreateResponse>;
    /**
     * securitycenterProjectsBigQueryExportsList - Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.
    **/
    securitycenterProjectsBigQueryExportsList(req: operations.SecuritycenterProjectsBigQueryExportsListRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsBigQueryExportsListResponse>;
    /**
     * securitycenterProjectsFindingsBulkMute - Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.
    **/
    securitycenterProjectsFindingsBulkMute(req: operations.SecuritycenterProjectsFindingsBulkMuteRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsFindingsBulkMuteResponse>;
    /**
     * securitycenterProjectsMuteConfigsCreate - Creates a mute config.
    **/
    securitycenterProjectsMuteConfigsCreate(req: operations.SecuritycenterProjectsMuteConfigsCreateRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsMuteConfigsCreateResponse>;
    /**
     * securitycenterProjectsMuteConfigsList - Lists mute configs.
    **/
    securitycenterProjectsMuteConfigsList(req: operations.SecuritycenterProjectsMuteConfigsListRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsMuteConfigsListResponse>;
    /**
     * securitycenterProjectsNotificationConfigsCreate - Creates a notification config.
    **/
    securitycenterProjectsNotificationConfigsCreate(req: operations.SecuritycenterProjectsNotificationConfigsCreateRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsNotificationConfigsCreateResponse>;
    /**
     * securitycenterProjectsNotificationConfigsDelete - Deletes a notification config.
    **/
    securitycenterProjectsNotificationConfigsDelete(req: operations.SecuritycenterProjectsNotificationConfigsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsNotificationConfigsDeleteResponse>;
    /**
     * securitycenterProjectsNotificationConfigsGet - Gets a notification config.
    **/
    securitycenterProjectsNotificationConfigsGet(req: operations.SecuritycenterProjectsNotificationConfigsGetRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsNotificationConfigsGetResponse>;
    /**
     * securitycenterProjectsNotificationConfigsList - Lists notification configs.
    **/
    securitycenterProjectsNotificationConfigsList(req: operations.SecuritycenterProjectsNotificationConfigsListRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsNotificationConfigsListResponse>;
    /**
     * securitycenterProjectsSourcesFindingsExternalSystemsPatch - Updates external system. This is for a given finding.
    **/
    securitycenterProjectsSourcesFindingsExternalSystemsPatch(req: operations.SecuritycenterProjectsSourcesFindingsExternalSystemsPatchRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsSourcesFindingsExternalSystemsPatchResponse>;
    /**
     * securitycenterProjectsSourcesFindingsGroup - Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings, /v1/folders/{folder_id}/sources/-/findings, /v1/projects/{project_id}/sources/-/findings
    **/
    securitycenterProjectsSourcesFindingsGroup(req: operations.SecuritycenterProjectsSourcesFindingsGroupRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsSourcesFindingsGroupResponse>;
    /**
     * securitycenterProjectsSourcesFindingsList - Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings
    **/
    securitycenterProjectsSourcesFindingsList(req: operations.SecuritycenterProjectsSourcesFindingsListRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsSourcesFindingsListResponse>;
    /**
     * securitycenterProjectsSourcesFindingsSetMute - Updates the mute state of a finding.
    **/
    securitycenterProjectsSourcesFindingsSetMute(req: operations.SecuritycenterProjectsSourcesFindingsSetMuteRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsSourcesFindingsSetMuteResponse>;
    /**
     * securitycenterProjectsSourcesFindingsSetState - Updates the state of a finding.
    **/
    securitycenterProjectsSourcesFindingsSetState(req: operations.SecuritycenterProjectsSourcesFindingsSetStateRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsSourcesFindingsSetStateResponse>;
    /**
     * securitycenterProjectsSourcesList - Lists all sources belonging to an organization.
    **/
    securitycenterProjectsSourcesList(req: operations.SecuritycenterProjectsSourcesListRequest, config?: AxiosRequestConfig): Promise<operations.SecuritycenterProjectsSourcesListResponse>;
}
