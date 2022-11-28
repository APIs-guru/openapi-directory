import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Certificates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * allCerts - Get all certificates
     *
     * Get all certificates
    **/
    allCerts(req: operations.AllCertsRequest, config?: AxiosRequestConfig): Promise<operations.AllCertsResponse>;
    /**
     * createCert - Create one certificate
     *
     * Create one certificate
    **/
    createCert(req: operations.CreateCertRequest, config?: AxiosRequestConfig): Promise<operations.CreateCertResponse>;
    /**
     * deleteCert - Delete one certificate by id
     *
     * Delete one certificate by id
    **/
    deleteCert(req: operations.DeleteCertRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCertResponse>;
    /**
     * oneCert - Get one certificate by id
     *
     * Get one certificate by id
    **/
    oneCert(req: operations.OneCertRequest, config?: AxiosRequestConfig): Promise<operations.OneCertResponse>;
    /**
     * patchCert - Update one certificate by id
     *
     * Update one certificate by id
    **/
    patchCert(req: operations.PatchCertRequest, config?: AxiosRequestConfig): Promise<operations.PatchCertResponse>;
    /**
     * putCert - Update one certificate by id
     *
     * Update one certificate by id
    **/
    putCert(req: operations.PutCertRequest, config?: AxiosRequestConfig): Promise<operations.PutCertResponse>;
}
