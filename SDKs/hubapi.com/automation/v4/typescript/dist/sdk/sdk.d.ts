import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Delete a function for a custom workflow action. This will remove the function itself as well as removing the association between the function and the custom action. This can't be undone.
    **/
    DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchive(req: operations.DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveResponse>;
    /**
     * Delete a function for a custom workflow action. This will remove the function itself as well as removing the association between the function and the custom action. This can't be undone.
    **/
    DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionType(req: operations.DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeResponse>;
    /**
     * Archives a single custom workflow action with the specified ID. Workflows that currently use this custom action will stop attempting to execute the action, and all future executions will be marked as a failure.
    **/
    DeleteAutomationV4ActionsAppIdDefinitionIdArchive(req: operations.DeleteAutomationV4ActionsAppIdDefinitionIdArchiveRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAutomationV4ActionsAppIdDefinitionIdArchiveResponse>;
    /**
     * Returns the given function for a custom workflow action.
    **/
    GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetById(req: operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdResponse>;
    /**
     * Returns the given function for a custom workflow action.
    **/
    GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionType(req: operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeResponse>;
    /**
     * Returns a list of all functions that are associated with the given custom workflow action.
    **/
    GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPage(req: operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageRequest, config?: AxiosRequestConfig): Promise<operations.GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageResponse>;
    /**
     * Returns the given version of a custom workflow action.
    **/
    GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetById(req: operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdResponse>;
    /**
     * Returns a list of revisions for a custom workflow action.
    **/
    GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPage(req: operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest, config?: AxiosRequestConfig): Promise<operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse>;
    /**
     * Returns a single custom workflow action with the specified ID.
    **/
    GetAutomationV4ActionsAppIdDefinitionIdGetById(req: operations.GetAutomationV4ActionsAppIdDefinitionIdGetByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAutomationV4ActionsAppIdDefinitionIdGetByIdResponse>;
    /**
     * Returns a list of all custom workflow actions.
    **/
    GetAutomationV4ActionsAppIdGetPage(req: operations.GetAutomationV4ActionsAppIdGetPageRequest, config?: AxiosRequestConfig): Promise<operations.GetAutomationV4ActionsAppIdGetPageResponse>;
    /**
     * Updates a custom workflow action with new values for the specified fields.
    **/
    PatchAutomationV4ActionsAppIdDefinitionIdUpdate(req: operations.PatchAutomationV4ActionsAppIdDefinitionIdUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PatchAutomationV4ActionsAppIdDefinitionIdUpdateResponse>;
    /**
     * Completes the given action callbacks.
    **/
    PostAutomationV4ActionsCallbacksCompleteCompleteBatch(req: operations.PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest, config?: AxiosRequestConfig): Promise<operations.PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse>;
    /**
     * Completes the given action callback.
    **/
    PostAutomationV4ActionsCallbacksCallbackIdCompleteComplete(req: operations.PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteRequest, config?: AxiosRequestConfig): Promise<operations.PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteResponse>;
    /**
     * Creates a new custom workflow action.
    **/
    PostAutomationV4ActionsAppIdCreate(req: operations.PostAutomationV4ActionsAppIdCreateRequest, config?: AxiosRequestConfig): Promise<operations.PostAutomationV4ActionsAppIdCreateResponse>;
    /**
     * Creates or replaces a function for a custom workflow action.
    **/
    PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplace(req: operations.PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceRequest, config?: AxiosRequestConfig): Promise<operations.PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceResponse>;
    /**
     * Creates or replaces a function for a custom workflow action.
    **/
    PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionType(req: operations.PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeRequest, config?: AxiosRequestConfig): Promise<operations.PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeResponse>;
}
export {};
