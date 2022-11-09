import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    GroupsSettingsGroupsGet(req: operations.GroupsSettingsGroupsGetRequest, config?: AxiosRequestConfig): Promise<operations.GroupsSettingsGroupsGetResponse>;
    GroupsSettingsGroupsPatch(req: operations.GroupsSettingsGroupsPatchRequest, config?: AxiosRequestConfig): Promise<operations.GroupsSettingsGroupsPatchResponse>;
    GroupsSettingsGroupsUpdate(req: operations.GroupsSettingsGroupsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.GroupsSettingsGroupsUpdateResponse>;
}
export {};
