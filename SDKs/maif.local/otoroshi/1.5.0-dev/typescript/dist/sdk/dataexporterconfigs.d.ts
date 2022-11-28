import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DataExporterConfigs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dataExporterTemplate - Get all data exporter configs
     *
     * Get all data exporter configs
    **/
    dataExporterTemplate(req: operations.DataExporterTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DataExporterTemplateResponse>;
    /**
     * createBulkDataExporterConfigs - Create a new data exporter configs
     *
     * Create a new data exporter configs
    **/
    createBulkDataExporterConfigs(req: operations.CreateBulkDataExporterConfigsRequest, config?: AxiosRequestConfig): Promise<operations.CreateBulkDataExporterConfigsResponse>;
    /**
     * createDataExporterConfig - Create a new data exporter config
     *
     * Create a new data exporter config
    **/
    createDataExporterConfig(req: operations.CreateDataExporterConfigRequest, config?: AxiosRequestConfig): Promise<operations.CreateDataExporterConfigResponse>;
    /**
     * deleteDataExporterConfig - Delete a data exporter config
     *
     * Delete a data exporter config
    **/
    deleteDataExporterConfig(req: operations.DeleteDataExporterConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDataExporterConfigResponse>;
    /**
     * deletebulkDataExporterConfig - Delete a data exporter config
     *
     * Delete a data exporter config
    **/
    deletebulkDataExporterConfig(req: operations.DeletebulkDataExporterConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeletebulkDataExporterConfigResponse>;
    /**
     * findAllDataExporters - Get all data exporter configs
     *
     * Get all data exporter configs
    **/
    findAllDataExporters(req: operations.FindAllDataExportersRequest, config?: AxiosRequestConfig): Promise<operations.FindAllDataExportersResponse>;
    /**
     * findDataExporterConfigById - Get a data exporter config
     *
     * Get a data exporter config
    **/
    findDataExporterConfigById(req: operations.FindDataExporterConfigByIdRequest, config?: AxiosRequestConfig): Promise<operations.FindDataExporterConfigByIdResponse>;
    /**
     * patchBulkDataExporterConfig - Update a data exporter configs with a diff
     *
     * Update a data exporter configs with a diff
    **/
    patchBulkDataExporterConfig(req: operations.PatchBulkDataExporterConfigRequest, config?: AxiosRequestConfig): Promise<operations.PatchBulkDataExporterConfigResponse>;
    /**
     * patchDataExporterConfig - Update a data exporter config with a diff
     *
     * Update a data exporter config with a diff
    **/
    patchDataExporterConfig(req: operations.PatchDataExporterConfigRequest, config?: AxiosRequestConfig): Promise<operations.PatchDataExporterConfigResponse>;
    /**
     * updateBulkDataExporterConfig - Update a data exporter configs
     *
     * Update a data exporter configs
    **/
    updateBulkDataExporterConfig(req: operations.UpdateBulkDataExporterConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBulkDataExporterConfigResponse>;
    /**
     * updateDataExporterConfig - Update a data exporter config
     *
     * Update a data exporter config
    **/
    updateDataExporterConfig(req: operations.UpdateDataExporterConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDataExporterConfigResponse>;
}
