import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class JwtVerifiers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createGlobalJwtVerifier - Create one global JWT verifiers
     *
     * Create one global JWT verifiers
    **/
    createGlobalJwtVerifier(req: operations.CreateGlobalJwtVerifierRequest, config?: AxiosRequestConfig): Promise<operations.CreateGlobalJwtVerifierResponse>;
    /**
     * deleteGlobalJwtVerifier - Delete one global JWT verifiers
     *
     * Delete one global JWT verifiers
    **/
    deleteGlobalJwtVerifier(req: operations.DeleteGlobalJwtVerifierRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGlobalJwtVerifierResponse>;
    /**
     * findAllGlobalJwtVerifiers - Get all global JWT verifiers
     *
     * Get all global JWT verifiers
    **/
    findAllGlobalJwtVerifiers(req: operations.FindAllGlobalJwtVerifiersRequest, config?: AxiosRequestConfig): Promise<operations.FindAllGlobalJwtVerifiersResponse>;
    /**
     * findGlobalJwtVerifiersById - Get one global JWT verifiers
     *
     * Get one global JWT verifiers
    **/
    findGlobalJwtVerifiersById(req: operations.FindGlobalJwtVerifiersByIdRequest, config?: AxiosRequestConfig): Promise<operations.FindGlobalJwtVerifiersByIdResponse>;
    /**
     * patchGlobalJwtVerifier - Update one global JWT verifiers
     *
     * Update one global JWT verifiers
    **/
    patchGlobalJwtVerifier(req: operations.PatchGlobalJwtVerifierRequest, config?: AxiosRequestConfig): Promise<operations.PatchGlobalJwtVerifierResponse>;
    /**
     * updateGlobalJwtVerifier - Update one global JWT verifiers
     *
     * Update one global JWT verifiers
    **/
    updateGlobalJwtVerifier(req: operations.UpdateGlobalJwtVerifierRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGlobalJwtVerifierResponse>;
}
