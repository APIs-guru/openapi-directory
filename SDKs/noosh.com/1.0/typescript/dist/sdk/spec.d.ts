import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Spec {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId - List a specific spec of project Level
     *
     * List a specific spec of project Level
    **/
    getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId(req: operations.GetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdResponse>;
    /**
     * getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFields - Get Spec Type Fields
     *
     * Get Spec Type Fields
    **/
    getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFields(req: operations.GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsResponse>;
    /**
     * putV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId - Update a specific Spec
     *
     * Update a specific Spec
    **/
    putV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId(req: operations.PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequest, config?: AxiosRequestConfig): Promise<operations.PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdResponse>;
    /**
     * getProductTypeListOfWorkgroup - Get product type of workgroup level
     *
     * Get product type of workgroup level
    **/
    getProductTypeListOfWorkgroup(req: operations.GetProductTypeListOfWorkgroupRequest, config?: AxiosRequestConfig): Promise<operations.GetProductTypeListOfWorkgroupResponse>;
    /**
     * getSpec - List a specific spec of project Level
     *
     * List a specific spec of project Level
    **/
    getSpec(req: operations.GetSpecRequest, config?: AxiosRequestConfig): Promise<operations.GetSpecResponse>;
    /**
     * getSpecList - List specs of project Level
     *
     * List specs of project Level
    **/
    getSpecList(req: operations.GetSpecListRequest, config?: AxiosRequestConfig): Promise<operations.GetSpecListResponse>;
    /**
     * getSpecProductTypeListOfWorkgroup - Get product type of spec level by workgroupId
     *
     * Get product type of spec level by workgroupId
    **/
    getSpecProductTypeListOfWorkgroup(req: operations.GetSpecProductTypeListOfWorkgroupRequest, config?: AxiosRequestConfig): Promise<operations.GetSpecProductTypeListOfWorkgroupResponse>;
    /**
     * getSpecTypeFields - Get Spec Type Fields
     *
     * Get Spec Type Fields
    **/
    getSpecTypeFields(req: operations.GetSpecTypeFieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpecTypeFieldsResponse>;
    /**
     * postSpec - Create a Spec
     *
     * Create a Spec
    **/
    postSpec(req: operations.PostSpecRequest, config?: AxiosRequestConfig): Promise<operations.PostSpecResponse>;
    /**
     * postSpecProductTypeListOfWorkgroup - Register product types for spec types
     *
     * Register product types for spec types
    **/
    postSpecProductTypeListOfWorkgroup(req: operations.PostSpecProductTypeListOfWorkgroupRequest, config?: AxiosRequestConfig): Promise<operations.PostSpecProductTypeListOfWorkgroupResponse>;
    /**
     * putSpec - Update a specific Spec
     *
     * Update a specific Spec
    **/
    putSpec(req: operations.PutSpecRequest, config?: AxiosRequestConfig): Promise<operations.PutSpecResponse>;
}
