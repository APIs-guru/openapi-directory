import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SshKeys {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteSshKeysId - Delete an SSH key
     *
     * Deletes an SSH key. It cannot be used anymore.
    **/
    deleteSshKeysId(req: operations.DeleteSshKeysIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSshKeysIdResponse>;
    /**
     * getSshKeys - Get all SSH keys
     *
     * Returns all SSH key objects.
    **/
    getSshKeys(req: operations.GetSshKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetSshKeysResponse>;
    /**
     * getSshKeysId - Get a SSH key
     *
     * Returns a specific SSH key object.
    **/
    getSshKeysId(req: operations.GetSshKeysIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSshKeysIdResponse>;
    /**
     * postSshKeys - Create an SSH key
     *
     * Creates a new SSH key with the given `name` and `public_key`. Once an SSH key is created, it can be used in other calls such as creating Servers.
    **/
    postSshKeys(req: operations.PostSshKeysRequest, config?: AxiosRequestConfig): Promise<operations.PostSshKeysResponse>;
    /**
     * putSshKeysId - Update an SSH key
     *
     * Updates an SSH key. You can update an SSH key name and an SSH key labels.
     *
     * Please note that when updating labels, the SSH key current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
     *
    **/
    putSshKeysId(req: operations.PutSshKeysIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSshKeysIdResponse>;
}
