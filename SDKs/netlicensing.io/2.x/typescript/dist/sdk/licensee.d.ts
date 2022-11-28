import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Licensee {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createLicensee - Create Licensee
     *
     * Creates a new Licensee
    **/
    createLicensee(req: operations.CreateLicenseeRequest, config?: AxiosRequestConfig): Promise<operations.CreateLicenseeResponse>;
    /**
     * deleteLicensee - Delete Licensee
     *
     * Delete a Licensee by 'number'
    **/
    deleteLicensee(req: operations.DeleteLicenseeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLicenseeResponse>;
    /**
     * getLicensee - Get Licensee
     *
     * Return a Licensee by 'licenseeNumber'
    **/
    getLicensee(req: operations.GetLicenseeRequest, config?: AxiosRequestConfig): Promise<operations.GetLicenseeResponse>;
    /**
     * listLicensees - List Licensees
     *
     * Return a list of all Licensees for the current Vendor
    **/
    listLicensees(req: operations.ListLicenseesRequest, config?: AxiosRequestConfig): Promise<operations.ListLicenseesResponse>;
    /**
     * transferLicenses - Transfer Licenses
     *
     * Licenses transfer between Licensees
    **/
    transferLicenses(req: operations.TransferLicensesRequest, config?: AxiosRequestConfig): Promise<operations.TransferLicensesResponse>;
    /**
     * updateLicensee - Update Licensee
     *
     * Sets the provided properties to a Licensee. Return an updated Licensee
    **/
    updateLicensee(req: operations.UpdateLicenseeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLicenseeResponse>;
    /**
     * validateLicensee - Validate Licensee
     *
     * Validates active Licenses of the Licensee
    **/
    validateLicensee(req: operations.ValidateLicenseeRequest, config?: AxiosRequestConfig): Promise<operations.ValidateLicenseeResponse>;
}
