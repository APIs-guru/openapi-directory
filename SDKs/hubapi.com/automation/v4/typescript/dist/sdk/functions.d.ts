import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Functions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchive - Delete a custom action function
     *
     * Delete a function for a custom workflow action. This will remove the function itself as well as removing the association between the function and the custom action. This can't be undone.
    **/
    deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchive(req: operations.DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveResponse>;
    /**
     * deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionType - Delete a custom action function
     *
     * Delete a function for a custom workflow action. This will remove the function itself as well as removing the association between the function and the custom action. This can't be undone.
    **/
    deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionType(req: operations.DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeResponse>;
    /**
     * getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetById - Get a custom action function
     *
     * Returns the given function for a custom workflow action.
    **/
    getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetById(req: operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdResponse>;
    /**
     * getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionType - Get a custom action function
     *
     * Returns the given function for a custom workflow action.
    **/
    getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionType(req: operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeResponse>;
    /**
     * getAutomationV4ActionsAppIdDefinitionIdFunctionsGetPage - Get all custom action functions
     *
     * Returns a list of all functions that are associated with the given custom workflow action.
    **/
    getAutomationV4ActionsAppIdDefinitionIdFunctionsGetPage(req: operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageRequest, config?: AxiosRequestConfig): Promise<operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageResponse>;
    /**
     * putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplace - Create or replace a custom action function
     *
     * Creates or replaces a function for a custom workflow action.
    **/
    putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplace(req: operations.PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceRequest, config?: AxiosRequestConfig): Promise<operations.PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceResponse>;
    /**
     * putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionType - Create or replace a custom action function
     *
     * Creates or replaces a function for a custom workflow action.
    **/
    putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionType(req: operations.PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeRequest, config?: AxiosRequestConfig): Promise<operations.PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeResponse>;
}
