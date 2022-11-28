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
     * sasportalInstallerGenerateSecret - Generates a secret to be used with the ValidateInstaller.
    **/
    sasportalInstallerGenerateSecret(req: operations.SasportalInstallerGenerateSecretRequest, config?: AxiosRequestConfig): Promise<operations.SasportalInstallerGenerateSecretResponse>;
    /**
     * sasportalInstallerValidate - Validates the identity of a Certified Professional Installer (CPI).
    **/
    sasportalInstallerValidate(req: operations.SasportalInstallerValidateRequest, config?: AxiosRequestConfig): Promise<operations.SasportalInstallerValidateResponse>;
}
