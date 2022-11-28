import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Workgroup {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getClientWorkgroupList - List client workgroups
     *
     * List client workgroups
    **/
    getClientWorkgroupList(req: operations.GetClientWorkgroupListRequest, config?: AxiosRequestConfig): Promise<operations.GetClientWorkgroupListResponse>;
    /**
     * getSpecificClientWorkgroup - Get a specific client workgroups
     *
     * Get a specific client workgroups
    **/
    getSpecificClientWorkgroup(req: operations.GetSpecificClientWorkgroupRequest, config?: AxiosRequestConfig): Promise<operations.GetSpecificClientWorkgroupResponse>;
    /**
     * getSupplierWorkgroupDetail - Get the specific supplier of My Group
     *
     * Get the specific supplier of My Group
    **/
    getSupplierWorkgroupDetail(req: operations.GetSupplierWorkgroupDetailRequest, config?: AxiosRequestConfig): Promise<operations.GetSupplierWorkgroupDetailResponse>;
    /**
     * getSupplierWorkgroupList - List supplier workgroups
     *
     * List supplier workgroups
    **/
    getSupplierWorkgroupList(req: operations.GetSupplierWorkgroupListRequest, config?: AxiosRequestConfig): Promise<operations.GetSupplierWorkgroupListResponse>;
    /**
     * getWorkgroupDetail - Detail workgroup info
     *
     * Detail workgroup info
    **/
    getWorkgroupDetail(req: operations.GetWorkgroupDetailRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkgroupDetailResponse>;
    /**
     * getWorkgroupList - List the workgroups
     *
     * List the workgroups
    **/
    getWorkgroupList(req: operations.GetWorkgroupListRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkgroupListResponse>;
    /**
     * putWorkgroup - Update a specific Workgroup
     *
     * Update a specific Workgroup
    **/
    putWorkgroup(req: operations.PutWorkgroupRequest, config?: AxiosRequestConfig): Promise<operations.PutWorkgroupResponse>;
}
