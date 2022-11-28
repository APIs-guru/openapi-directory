import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AuthConfig {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createGlobalAuthModule - Create one global auth. module config
     *
     * Create one global auth. module config
    **/
    createGlobalAuthModule(req: operations.CreateGlobalAuthModuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateGlobalAuthModuleResponse>;
    /**
     * deleteGlobalAuthModule - Delete one global auth. module config
     *
     * Delete one global auth. module config
    **/
    deleteGlobalAuthModule(req: operations.DeleteGlobalAuthModuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGlobalAuthModuleResponse>;
    /**
     * findAllGlobalAuthModules - Get all global auth. module configs
     *
     * Get all global auth. module configs
    **/
    findAllGlobalAuthModules(req: operations.FindAllGlobalAuthModulesRequest, config?: AxiosRequestConfig): Promise<operations.FindAllGlobalAuthModulesResponse>;
    /**
     * findGlobalAuthModuleById - Get one global auth. module configs
     *
     * Get one global auth. module configs
    **/
    findGlobalAuthModuleById(req: operations.FindGlobalAuthModuleByIdRequest, config?: AxiosRequestConfig): Promise<operations.FindGlobalAuthModuleByIdResponse>;
    /**
     * patchGlobalAuthModule - Update one global auth. module config
     *
     * Update one global auth. module config
    **/
    patchGlobalAuthModule(req: operations.PatchGlobalAuthModuleRequest, config?: AxiosRequestConfig): Promise<operations.PatchGlobalAuthModuleResponse>;
    /**
     * updateGlobalAuthModule - Update one global auth. module config
     *
     * Update one global auth. module config
    **/
    updateGlobalAuthModule(req: operations.UpdateGlobalAuthModuleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGlobalAuthModuleResponse>;
}
