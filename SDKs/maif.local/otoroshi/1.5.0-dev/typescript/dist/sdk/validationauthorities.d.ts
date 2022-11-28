import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ValidationAuthorities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createClientValidator - Create one validation authorities
     *
     * Create one validation authorities
    **/
    createClientValidator(req: operations.CreateClientValidatorRequest, config?: AxiosRequestConfig): Promise<operations.CreateClientValidatorResponse>;
    /**
     * deleteClientValidator - Delete one validation authorities by id
     *
     * Delete one validation authorities by id
    **/
    deleteClientValidator(req: operations.DeleteClientValidatorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteClientValidatorResponse>;
    /**
     * findAllClientValidators - Get all validation authoritiess
     *
     * Get all validation authoritiess
    **/
    findAllClientValidators(req: operations.FindAllClientValidatorsRequest, config?: AxiosRequestConfig): Promise<operations.FindAllClientValidatorsResponse>;
    /**
     * findClientValidatorById - Get one validation authorities by id
     *
     * Get one validation authorities by id
    **/
    findClientValidatorById(req: operations.FindClientValidatorByIdRequest, config?: AxiosRequestConfig): Promise<operations.FindClientValidatorByIdResponse>;
    /**
     * patchClientValidator - Update one validation authorities by id
     *
     * Update one validation authorities by id
    **/
    patchClientValidator(req: operations.PatchClientValidatorRequest, config?: AxiosRequestConfig): Promise<operations.PatchClientValidatorResponse>;
    /**
     * updateClientValidator - Update one validation authorities by id
     *
     * Update one validation authorities by id
    **/
    updateClientValidator(req: operations.UpdateClientValidatorRequest, config?: AxiosRequestConfig): Promise<operations.UpdateClientValidatorResponse>;
}
