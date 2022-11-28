import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Admins {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createOrganizationAdmin - Create a new dashboard administrator
     *
     * Create a new dashboard administrator
    **/
    createOrganizationAdmin(req: operations.CreateOrganizationAdminRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationAdminResponse>;
    /**
     * deleteOrganizationAdmin - Revoke all access for a dashboard administrator within this organization
     *
     * Revoke all access for a dashboard administrator within this organization
    **/
    deleteOrganizationAdmin(req: operations.DeleteOrganizationAdminRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationAdminResponse>;
    /**
     * getOrganizationAdmins - List the dashboard administrators in this organization
     *
     * List the dashboard administrators in this organization
    **/
    getOrganizationAdmins(req: operations.GetOrganizationAdminsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdminsResponse>;
    /**
     * updateOrganizationAdmin - Update an administrator
     *
     * Update an administrator
    **/
    updateOrganizationAdmin(req: operations.UpdateOrganizationAdminRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationAdminResponse>;
}
