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
    CloudprofilerProjectsProfilesCreate(req: operations.CloudprofilerProjectsProfilesCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudprofilerProjectsProfilesCreateResponse>;
    CloudprofilerProjectsProfilesCreateOffline(req: operations.CloudprofilerProjectsProfilesCreateOfflineRequest, config?: AxiosRequestConfig): Promise<operations.CloudprofilerProjectsProfilesCreateOfflineResponse>;
    CloudprofilerProjectsProfilesPatch(req: operations.CloudprofilerProjectsProfilesPatchRequest, config?: AxiosRequestConfig): Promise<operations.CloudprofilerProjectsProfilesPatchResponse>;
}
export {};
