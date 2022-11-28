import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class License {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createLicense - Create License
     *
     * Creates a new License
    **/
    createLicense(req: operations.CreateLicenseRequest, config?: AxiosRequestConfig): Promise<operations.CreateLicenseResponse>;
    /**
     * deleteLicense - Delete License
     *
     * Delete License by a 'licenseNumber'
    **/
    deleteLicense(req: operations.DeleteLicenseRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLicenseResponse>;
    /**
     * getLicense - Get License
     *
     * Get License by a 'licenseNumber'
    **/
    getLicense(req: operations.GetLicenseRequest, config?: AxiosRequestConfig): Promise<operations.GetLicenseResponse>;
    /**
     * listLicenses - List Licenses
     *
     * Return a list of all Licenses for the current Vendor
    **/
    listLicenses(req: operations.ListLicensesRequest, config?: AxiosRequestConfig): Promise<operations.ListLicensesResponse>;
    /**
     * updateLicense - Update License
     *
     * Update License by a 'licenseNumber'
    **/
    updateLicense(req: operations.UpdateLicenseRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLicenseResponse>;
}
