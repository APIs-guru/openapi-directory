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
    IapGetIamPolicy(req: operations.IapGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.IapGetIamPolicyResponse>;
    IapSetIamPolicy(req: operations.IapSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.IapSetIamPolicyResponse>;
    IapTestIamPermissions(req: operations.IapTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.IapTestIamPermissionsResponse>;
}
export {};
