import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Licenses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * assignOrganizationLicensesSeats - Assign SM seats to a network
     *
     * Assign SM seats to a network. This will increase the managed SM device limit of the network
    **/
    assignOrganizationLicensesSeats(req: operations.AssignOrganizationLicensesSeatsRequest, config?: AxiosRequestConfig): Promise<operations.AssignOrganizationLicensesSeatsResponse>;
    /**
     * getOrganizationLicense - Display a license
     *
     * Display a license
    **/
    getOrganizationLicense(req: operations.GetOrganizationLicenseRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationLicenseResponse>;
    /**
     * getOrganizationLicenses - List the licenses for an organization
     *
     * List the licenses for an organization
    **/
    getOrganizationLicenses(req: operations.GetOrganizationLicensesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationLicensesResponse>;
    /**
     * getOrganizationLicensesOverview - Return an overview of the license state for an organization
     *
     * Return an overview of the license state for an organization
    **/
    getOrganizationLicensesOverview(req: operations.GetOrganizationLicensesOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationLicensesOverviewResponse>;
    /**
     * moveOrganizationLicenses - Move licenses to another organization
     *
     * Move licenses to another organization. This will also move any devices that the licenses are assigned to
    **/
    moveOrganizationLicenses(req: operations.MoveOrganizationLicensesRequest, config?: AxiosRequestConfig): Promise<operations.MoveOrganizationLicensesResponse>;
    /**
     * moveOrganizationLicensesSeats - Move SM seats to another organization
     *
     * Move SM seats to another organization
    **/
    moveOrganizationLicensesSeats(req: operations.MoveOrganizationLicensesSeatsRequest, config?: AxiosRequestConfig): Promise<operations.MoveOrganizationLicensesSeatsResponse>;
    /**
     * renewOrganizationLicensesSeats - Renew SM seats of a license
     *
     * Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license
    **/
    renewOrganizationLicensesSeats(req: operations.RenewOrganizationLicensesSeatsRequest, config?: AxiosRequestConfig): Promise<operations.RenewOrganizationLicensesSeatsResponse>;
    /**
     * updateOrganizationLicense - Update a license
     *
     * Update a license
    **/
    updateOrganizationLicense(req: operations.UpdateOrganizationLicenseRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationLicenseResponse>;
}
