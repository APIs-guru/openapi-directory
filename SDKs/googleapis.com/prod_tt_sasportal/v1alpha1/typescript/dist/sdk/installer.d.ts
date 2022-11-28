import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Installer {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * prodTtSasportalInstallerGenerateSecret - Generates a secret to be used with the ValidateInstaller.
    **/
    prodTtSasportalInstallerGenerateSecret(req: operations.ProdTtSasportalInstallerGenerateSecretRequest, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalInstallerGenerateSecretResponse>;
    /**
     * prodTtSasportalInstallerValidate - Validates the identity of a Certified Professional Installer (CPI).
    **/
    prodTtSasportalInstallerValidate(req: operations.ProdTtSasportalInstallerValidateRequest, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalInstallerValidateResponse>;
}
