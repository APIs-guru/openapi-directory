import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Definitions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteAutomationV4ActionsAppIdDefinitionIdArchive - Archive a custom action
     *
     * Archives a single custom workflow action with the specified ID. Workflows that currently use this custom action will stop attempting to execute the action, and all future executions will be marked as a failure.
    **/
    deleteAutomationV4ActionsAppIdDefinitionIdArchive(req: operations.DeleteAutomationV4ActionsAppIdDefinitionIdArchiveRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAutomationV4ActionsAppIdDefinitionIdArchiveResponse>;
    /**
     * getAutomationV4ActionsAppIdDefinitionIdGetById - Get a custom action
     *
     * Returns a single custom workflow action with the specified ID.
    **/
    getAutomationV4ActionsAppIdDefinitionIdGetById(req: operations.GetAutomationV4ActionsAppIdDefinitionIdGetByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAutomationV4ActionsAppIdDefinitionIdGetByIdResponse>;
    /**
     * getAutomationV4ActionsAppIdGetPage - Get all custom actions
     *
     * Returns a list of all custom workflow actions.
    **/
    getAutomationV4ActionsAppIdGetPage(req: operations.GetAutomationV4ActionsAppIdGetPageRequest, config?: AxiosRequestConfig): Promise<operations.GetAutomationV4ActionsAppIdGetPageResponse>;
    /**
     * patchAutomationV4ActionsAppIdDefinitionIdUpdate - Update a custom action
     *
     * Updates a custom workflow action with new values for the specified fields.
    **/
    patchAutomationV4ActionsAppIdDefinitionIdUpdate(req: operations.PatchAutomationV4ActionsAppIdDefinitionIdUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PatchAutomationV4ActionsAppIdDefinitionIdUpdateResponse>;
    /**
     * postAutomationV4ActionsAppIdCreate - Create new custom action
     *
     * Creates a new custom workflow action.
    **/
    postAutomationV4ActionsAppIdCreate(req: operations.PostAutomationV4ActionsAppIdCreateRequest, config?: AxiosRequestConfig): Promise<operations.PostAutomationV4ActionsAppIdCreateResponse>;
}
