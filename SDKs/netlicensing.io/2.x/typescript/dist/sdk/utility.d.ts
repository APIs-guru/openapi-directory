import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Utility {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * licenseTypes - List License Types
     *
     * Return a list of all License Types supported by the service
    **/
    licenseTypes(req: operations.LicenseTypesRequest, config?: AxiosRequestConfig): Promise<operations.LicenseTypesResponse>;
    /**
     * licensingModels - List Licensing Models
     *
     * Return a list of all licensing models supported by the service
    **/
    licensingModels(req: operations.LicensingModelsRequest, config?: AxiosRequestConfig): Promise<operations.LicensingModelsResponse>;
}
