import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Controller {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * clouddebuggerControllerDebuggeesBreakpointsList - Returns the list of all active breakpoints for the debuggee. The breakpoint specification (`location`, `condition`, and `expressions` fields) is semantically immutable, although the field values may change. For example, an agent may update the location line number to reflect the actual line where the breakpoint was set, but this doesn't change the breakpoint semantics. This means that an agent does not need to check if a breakpoint has changed when it encounters the same breakpoint on a successive call. Moreover, an agent should remember the breakpoints that are completed until the controller removes them from the active list to avoid setting those breakpoints again.
    **/
    clouddebuggerControllerDebuggeesBreakpointsList(req: operations.ClouddebuggerControllerDebuggeesBreakpointsListRequest, config?: AxiosRequestConfig): Promise<operations.ClouddebuggerControllerDebuggeesBreakpointsListResponse>;
    /**
     * clouddebuggerControllerDebuggeesBreakpointsUpdate - Updates the breakpoint state or mutable fields. The entire Breakpoint message must be sent back to the controller service. Updates to active breakpoint fields are only allowed if the new value does not change the breakpoint specification. Updates to the `location`, `condition` and `expressions` fields should not alter the breakpoint semantics. These may only make changes such as canonicalizing a value or snapping the location to the correct line of code.
    **/
    clouddebuggerControllerDebuggeesBreakpointsUpdate(req: operations.ClouddebuggerControllerDebuggeesBreakpointsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ClouddebuggerControllerDebuggeesBreakpointsUpdateResponse>;
    /**
     * clouddebuggerControllerDebuggeesRegister - Registers the debuggee with the controller service. All agents attached to the same application must call this method with exactly the same request content to get back the same stable `debuggee_id`. Agents should call this method again whenever `google.rpc.Code.NOT_FOUND` is returned from any controller method. This protocol allows the controller service to disable debuggees, recover from data loss, or change the `debuggee_id` format. Agents must handle `debuggee_id` value changing upon re-registration.
    **/
    clouddebuggerControllerDebuggeesRegister(req: operations.ClouddebuggerControllerDebuggeesRegisterRequest, config?: AxiosRequestConfig): Promise<operations.ClouddebuggerControllerDebuggeesRegisterResponse>;
}
