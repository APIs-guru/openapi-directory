import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Actions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getActions - Get all Actions
     *
     * Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.
    **/
    getActions(req: operations.GetActionsRequest, config?: AxiosRequestConfig): Promise<operations.GetActionsResponse>;
    /**
     * getActionsId - Get an Action
     *
     * Returns a specific Action object.
    **/
    getActionsId(req: operations.GetActionsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetActionsIdResponse>;
}
