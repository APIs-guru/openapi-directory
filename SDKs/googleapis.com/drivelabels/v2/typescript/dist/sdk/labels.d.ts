import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Labels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * drivelabelsLabelsGet - Get a label by its resource name. Resource name may be any of: * `labels/{id}` - See `labels/{id}@latest` * `labels/{id}@latest` - Gets the latest revision of the label. * `labels/{id}@published` - Gets the current published revision of the label. * `labels/{id}@{revision_id}` - Gets the label at the specified revision ID.
    **/
    drivelabelsLabelsGet(req: operations.DrivelabelsLabelsGetRequest, config?: AxiosRequestConfig): Promise<operations.DrivelabelsLabelsGetResponse>;
    /**
     * drivelabelsLabelsList - List labels.
    **/
    drivelabelsLabelsList(req: operations.DrivelabelsLabelsListRequest, config?: AxiosRequestConfig): Promise<operations.DrivelabelsLabelsListResponse>;
}
