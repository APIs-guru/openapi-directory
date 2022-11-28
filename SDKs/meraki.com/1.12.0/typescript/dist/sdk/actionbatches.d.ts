import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ActionBatches {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createOrganizationActionBatch - Create an action batch
     *
     * Create an action batch
    **/
    createOrganizationActionBatch(req: operations.CreateOrganizationActionBatchRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationActionBatchResponse>;
    /**
     * deleteOrganizationActionBatch - Delete an action batch
     *
     * Delete an action batch
    **/
    deleteOrganizationActionBatch(req: operations.DeleteOrganizationActionBatchRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationActionBatchResponse>;
    /**
     * getOrganizationActionBatch - Return an action batch
     *
     * Return an action batch
    **/
    getOrganizationActionBatch(req: operations.GetOrganizationActionBatchRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationActionBatchResponse>;
    /**
     * getOrganizationActionBatches - Return the list of action batches in the organization
     *
     * Return the list of action batches in the organization
    **/
    getOrganizationActionBatches(req: operations.GetOrganizationActionBatchesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationActionBatchesResponse>;
    /**
     * updateOrganizationActionBatch - Update an action batch
     *
     * Update an action batch
    **/
    updateOrganizationActionBatch(req: operations.UpdateOrganizationActionBatchRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationActionBatchResponse>;
}
