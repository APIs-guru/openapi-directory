import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Apikeys {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * allApiKeys - Get all api keys
     *
     * Get all api keys
    **/
    allApiKeys(req: operations.AllApiKeysRequest, config?: AxiosRequestConfig): Promise<operations.AllApiKeysResponse>;
    /**
     * apiKey - Get an api key
     *
     * Get an api key for a specified service descriptor
    **/
    apiKey(req: operations.ApiKeyRequest, config?: AxiosRequestConfig): Promise<operations.ApiKeyResponse>;
    /**
     * apiKeyFromGroup - Get an api key
     *
     * Get an api key for a specified service group
    **/
    apiKeyFromGroup(req: operations.ApiKeyFromGroupRequest, config?: AxiosRequestConfig): Promise<operations.ApiKeyFromGroupResponse>;
    /**
     * apiKeyFromGroupQuotas - Get the quota state of an api key
     *
     * Get the quota state of an api key
    **/
    apiKeyFromGroupQuotas(req: operations.ApiKeyFromGroupQuotasRequest, config?: AxiosRequestConfig): Promise<operations.ApiKeyFromGroupQuotasResponse>;
    /**
     * apiKeyGroup - Get the group of an api key
     *
     * Get the group of an api key
    **/
    apiKeyGroup(req: operations.ApiKeyGroupRequest, config?: AxiosRequestConfig): Promise<operations.ApiKeyGroupResponse>;
    /**
     * apiKeyQuotas - Get the quota state of an api key
     *
     * Get the quota state of an api key
    **/
    apiKeyQuotas(req: operations.ApiKeyQuotasRequest, config?: AxiosRequestConfig): Promise<operations.ApiKeyQuotasResponse>;
    /**
     * apiKeys - Get all api keys for the group of a service
     *
     * Get all api keys for the group of a service
    **/
    apiKeys(req: operations.ApiKeysRequest, config?: AxiosRequestConfig): Promise<operations.ApiKeysResponse>;
    /**
     * apiKeysFromGroup - Get all api keys for the group of a service
     *
     * Get all api keys for the group of a service
    **/
    apiKeysFromGroup(req: operations.ApiKeysFromGroupRequest, config?: AxiosRequestConfig): Promise<operations.ApiKeysFromGroupResponse>;
    /**
     * createApiKey - Create a new api key for a service
    **/
    createApiKey(req: operations.CreateApiKeyRequest, config?: AxiosRequestConfig): Promise<operations.CreateApiKeyResponse>;
    /**
     * createApiKeyFromGroup - Create a new api key for a group
     *
     * Create a new api key for a group
    **/
    createApiKeyFromGroup(req: operations.CreateApiKeyFromGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateApiKeyFromGroupResponse>;
    /**
     * deleteApiKey - Delete an api key
     *
     * Delete an api key for a specified service descriptor
    **/
    deleteApiKey(req: operations.DeleteApiKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApiKeyResponse>;
    /**
     * deleteApiKeyFromGroup - Delete an api key
     *
     * Delete an api key for a specified service group
    **/
    deleteApiKeyFromGroup(req: operations.DeleteApiKeyFromGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApiKeyFromGroupResponse>;
    /**
     * patchApiKey - Update an api key with a diff
     *
     * Update an api key for a specified service descriptor with a diff
    **/
    patchApiKey(req: operations.PatchApiKeyRequest, config?: AxiosRequestConfig): Promise<operations.PatchApiKeyResponse>;
    /**
     * patchApiKeyFromGroup - Update an api key with a diff
     *
     * Update an api key for a specified service descriptor with a diff
    **/
    patchApiKeyFromGroup(req: operations.PatchApiKeyFromGroupRequest, config?: AxiosRequestConfig): Promise<operations.PatchApiKeyFromGroupResponse>;
    /**
     * resetApiKeyFromGroupQuotas - Reset the quota state of an api key
     *
     * Reset the quota state of an api key
    **/
    resetApiKeyFromGroupQuotas(req: operations.ResetApiKeyFromGroupQuotasRequest, config?: AxiosRequestConfig): Promise<operations.ResetApiKeyFromGroupQuotasResponse>;
    /**
     * resetApiKeyQuotas - Reset the quota state of an api key
     *
     * Reset the quota state of an api key
    **/
    resetApiKeyQuotas(req: operations.ResetApiKeyQuotasRequest, config?: AxiosRequestConfig): Promise<operations.ResetApiKeyQuotasResponse>;
    /**
     * updateApiKey - Update an api key
     *
     * Update an api key for a specified service descriptor
    **/
    updateApiKey(req: operations.UpdateApiKeyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApiKeyResponse>;
    /**
     * updateApiKeyFromGroup - Update an api key
     *
     * Update an api key for a specified service group
    **/
    updateApiKeyFromGroup(req: operations.UpdateApiKeyFromGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApiKeyFromGroupResponse>;
}
