import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Systempolicy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * binaryauthorizationSystempolicyGetPolicy - Gets the current system policy in the specified location.
    **/
    binaryauthorizationSystempolicyGetPolicy(req: operations.BinaryauthorizationSystempolicyGetPolicyRequest, config?: AxiosRequestConfig): Promise<operations.BinaryauthorizationSystempolicyGetPolicyResponse>;
}
