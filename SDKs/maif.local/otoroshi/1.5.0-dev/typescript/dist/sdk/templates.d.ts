import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Templates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * initiateApiKey - Get a template of an Otoroshi Api Key
     *
     * Get a template of an Otoroshi Api Key. The generated entity is not persisted
    **/
    initiateApiKey(req: operations.InitiateApiKeyRequest, config?: AxiosRequestConfig): Promise<operations.InitiateApiKeyResponse>;
    /**
     * initiateService - Get a template of an Otoroshi service descriptor
     *
     * Get a template of an Otoroshi service descriptor. The generated entity is not persisted
    **/
    initiateService(req: operations.InitiateServiceRequest, config?: AxiosRequestConfig): Promise<operations.InitiateServiceResponse>;
    /**
     * initiateServiceGroup - Get a template of an Otoroshi service group
     *
     * Get a template of an Otoroshi service group. The generated entity is not persisted
    **/
    initiateServiceGroup(req: operations.InitiateServiceGroupRequest, config?: AxiosRequestConfig): Promise<operations.InitiateServiceGroupResponse>;
}
