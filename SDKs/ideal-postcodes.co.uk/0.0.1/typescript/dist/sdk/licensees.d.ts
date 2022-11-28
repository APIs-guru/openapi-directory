import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Licensees {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createLicensee - createLicensee
     *
     * Create a licensee for the specified API Key.
    **/
    createLicensee(req: operations.CreateLicenseeRequest, config?: AxiosRequestConfig): Promise<operations.CreateLicenseeResponse>;
    /**
     * deleteLicensee - deleteLicensee
     *
     * Cancels a licensee key. This renders a licensee unusable. This action can be reversed if you get in contact with us.
    **/
    deleteLicensee(req: operations.DeleteLicenseeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLicenseeResponse>;
    /**
     * listLicensees - listLicensees
     *
     * Returns a list of licensees for a key.
    **/
    listLicensees(req: operations.ListLicenseesRequest, config?: AxiosRequestConfig): Promise<operations.ListLicenseesResponse>;
    /**
     * retrieveLicensee - retrieveLicensee
     *
     * Returns licensee information as identified by the licensee key.
    **/
    retrieveLicensee(req: operations.RetrieveLicenseeRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveLicenseeResponse>;
    /**
     * updateLicensee - updateLicensee
     *
     * Update particulars for a licensee
    **/
    updateLicensee(req: operations.UpdateLicenseeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLicenseeResponse>;
}
