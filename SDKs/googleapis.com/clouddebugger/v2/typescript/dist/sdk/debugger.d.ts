import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Debugger {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * clouddebuggerDebuggerDebuggeesBreakpointsDelete - Deletes the breakpoint from the debuggee.
    **/
    clouddebuggerDebuggerDebuggeesBreakpointsDelete(req: operations.ClouddebuggerDebuggerDebuggeesBreakpointsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ClouddebuggerDebuggerDebuggeesBreakpointsDeleteResponse>;
    /**
     * clouddebuggerDebuggerDebuggeesBreakpointsGet - Gets breakpoint information.
    **/
    clouddebuggerDebuggerDebuggeesBreakpointsGet(req: operations.ClouddebuggerDebuggerDebuggeesBreakpointsGetRequest, config?: AxiosRequestConfig): Promise<operations.ClouddebuggerDebuggerDebuggeesBreakpointsGetResponse>;
    /**
     * clouddebuggerDebuggerDebuggeesBreakpointsList - Lists all breakpoints for the debuggee.
    **/
    clouddebuggerDebuggerDebuggeesBreakpointsList(req: operations.ClouddebuggerDebuggerDebuggeesBreakpointsListRequest, config?: AxiosRequestConfig): Promise<operations.ClouddebuggerDebuggerDebuggeesBreakpointsListResponse>;
    /**
     * clouddebuggerDebuggerDebuggeesBreakpointsSet - Sets the breakpoint to the debuggee.
    **/
    clouddebuggerDebuggerDebuggeesBreakpointsSet(req: operations.ClouddebuggerDebuggerDebuggeesBreakpointsSetRequest, config?: AxiosRequestConfig): Promise<operations.ClouddebuggerDebuggerDebuggeesBreakpointsSetResponse>;
    /**
     * clouddebuggerDebuggerDebuggeesList - Lists all the debuggees that the user has access to.
    **/
    clouddebuggerDebuggerDebuggeesList(req: operations.ClouddebuggerDebuggerDebuggeesListRequest, config?: AxiosRequestConfig): Promise<operations.ClouddebuggerDebuggerDebuggeesListResponse>;
}
