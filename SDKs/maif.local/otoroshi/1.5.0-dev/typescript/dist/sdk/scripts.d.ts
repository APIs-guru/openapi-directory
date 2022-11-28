import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Scripts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * compileScript - Compile a script
     *
     * Compile a script
    **/
    compileScript(req: operations.CompileScriptRequest, config?: AxiosRequestConfig): Promise<operations.CompileScriptResponse>;
    /**
     * createScript - Create a new script
     *
     * Create a new script
    **/
    createScript(req: operations.CreateScriptRequest, config?: AxiosRequestConfig): Promise<operations.CreateScriptResponse>;
    /**
     * deleteScript - Delete a script
     *
     * Delete a script
    **/
    deleteScript(req: operations.DeleteScriptRequest, config?: AxiosRequestConfig): Promise<operations.DeleteScriptResponse>;
    /**
     * findAllScripts - Get all scripts
     *
     * Get all scripts
    **/
    findAllScripts(req: operations.FindAllScriptsRequest, config?: AxiosRequestConfig): Promise<operations.FindAllScriptsResponse>;
    /**
     * findScriptById - Get a script
     *
     * Get a script
    **/
    findScriptById(req: operations.FindScriptByIdRequest, config?: AxiosRequestConfig): Promise<operations.FindScriptByIdResponse>;
    /**
     * patchScript - Update a script with a diff
     *
     * Update a script with a diff
    **/
    patchScript(req: operations.PatchScriptRequest, config?: AxiosRequestConfig): Promise<operations.PatchScriptResponse>;
    /**
     * updateScript - Update a script
     *
     * Update a script
    **/
    updateScript(req: operations.UpdateScriptRequest, config?: AxiosRequestConfig): Promise<operations.UpdateScriptResponse>;
}
