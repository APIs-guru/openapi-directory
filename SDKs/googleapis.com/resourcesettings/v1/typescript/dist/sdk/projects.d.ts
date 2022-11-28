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
     * resourcesettingsProjectsSettingsGet - Returns a specified setting. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the setting does not exist.
    **/
    resourcesettingsProjectsSettingsGet(req: operations.ResourcesettingsProjectsSettingsGetRequest, config?: AxiosRequestConfig): Promise<operations.ResourcesettingsProjectsSettingsGetResponse>;
    /**
     * resourcesettingsProjectsSettingsList - Lists all the settings that are available on the Cloud resource `parent`.
    **/
    resourcesettingsProjectsSettingsList(req: operations.ResourcesettingsProjectsSettingsListRequest, config?: AxiosRequestConfig): Promise<operations.ResourcesettingsProjectsSettingsListResponse>;
    /**
     * resourcesettingsProjectsSettingsPatch - Updates a specified setting. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the setting does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.FAILED_PRECONDITION` if the setting is flagged as read only. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the setting value. On success, the response will contain only `name`, `local_value` and `etag`. The `metadata` and `effective_value` cannot be updated through this API. Note: the supplied setting will perform a full overwrite of the `local_value` field.
    **/
    resourcesettingsProjectsSettingsPatch(req: operations.ResourcesettingsProjectsSettingsPatchRequest, config?: AxiosRequestConfig): Promise<operations.ResourcesettingsProjectsSettingsPatchResponse>;
}
