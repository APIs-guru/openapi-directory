import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Groups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * groupsSettingsGroupsGet - Gets one resource by id.
    **/
    groupsSettingsGroupsGet(req: operations.GroupsSettingsGroupsGetRequest, config?: AxiosRequestConfig): Promise<operations.GroupsSettingsGroupsGetResponse>;
    /**
     * groupsSettingsGroupsPatch - Updates an existing resource. This method supports patch semantics.
    **/
    groupsSettingsGroupsPatch(req: operations.GroupsSettingsGroupsPatchRequest, config?: AxiosRequestConfig): Promise<operations.GroupsSettingsGroupsPatchResponse>;
    /**
     * groupsSettingsGroupsUpdate - Updates an existing resource.
    **/
    groupsSettingsGroupsUpdate(req: operations.GroupsSettingsGroupsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.GroupsSettingsGroupsUpdateResponse>;
}
