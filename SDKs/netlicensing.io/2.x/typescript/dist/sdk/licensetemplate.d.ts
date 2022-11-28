import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LicenseTemplate {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createLicenseTemplate - Create License Template
     *
     * Creates a new License Template
    **/
    createLicenseTemplate(req: operations.CreateLicenseTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateLicenseTemplateResponse>;
    /**
     * deleteLicenseTemplate - Delete License Template
     *
     * Delete a License Template by 'number'.
    **/
    deleteLicenseTemplate(req: operations.DeleteLicenseTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLicenseTemplateResponse>;
    /**
     * getLicenseTemplate - Get License Template
     *
     * Return a License Template by 'licenseTemplateNumber'
    **/
    getLicenseTemplate(req: operations.GetLicenseTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetLicenseTemplateResponse>;
    /**
     * listLicenseTemplates - List License Templates
     *
     * Return a list of all License Templates for the current Vendor
    **/
    listLicenseTemplates(req: operations.ListLicenseTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.ListLicenseTemplatesResponse>;
    /**
     * updateLicenseTemplate - Update License Template
     *
     * Sets the provided properties to a License Template. Return an updated License Template
    **/
    updateLicenseTemplate(req: operations.UpdateLicenseTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLicenseTemplateResponse>;
}
