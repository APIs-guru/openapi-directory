import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Keys {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addKey - Create key
     *
     * Can only be used by an **administrative** user.
    **/
    addKey(req: operations.AddKeyRequest, config?: AxiosRequestConfig): Promise<operations.AddKeyResponse>;
    /**
     * deleteKey - Delete key
     *
     * Can only be used by an **administrative** user.
    **/
    deleteKey(req: operations.DeleteKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteKeyResponse>;
    /**
     * getKeyById - Get key
     *
     * Can only be used by an **administrative** user.
    **/
    getKeyById(req: operations.GetKeyByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetKeyByIdResponse>;
    /**
     * getKeys - Get all keys
     *
     * Can only be used by an **administrative** user.
    **/
    getKeys(req: operations.GetKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetKeysResponse>;
    /**
     * updateKey - Update existing key
     *
     * Can only be used by an **administrative** user.
    **/
    updateKey(req: operations.UpdateKeyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateKeyResponse>;
}
