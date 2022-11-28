import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Revisions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetById - Get a revision for a custom action
     *
     * Returns the given version of a custom workflow action.
    **/
    getAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetById(req: operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdResponse>;
    /**
     * getAutomationV4ActionsAppIdDefinitionIdRevisionsGetPage - Get all revisions for a custom action
     *
     * Returns a list of revisions for a custom workflow action.
    **/
    getAutomationV4ActionsAppIdDefinitionIdRevisionsGetPage(req: operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest, config?: AxiosRequestConfig): Promise<operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse>;
}
