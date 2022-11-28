import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsSetPathParams extends SpeakeasyBase {
    debuggeeId: string;
}
export declare enum ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnum {
    CanaryOptionUnspecified = "CANARY_OPTION_UNSPECIFIED",
    CanaryOptionTryEnable = "CANARY_OPTION_TRY_ENABLE",
    CanaryOptionTryDisable = "CANARY_OPTION_TRY_DISABLE"
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    canaryOption?: ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnum;
    clientVersion?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurity extends SpeakeasyBase {
    option1?: ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption1;
    option2?: ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption2;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsSetRequest extends SpeakeasyBase {
    pathParams: ClouddebuggerDebuggerDebuggeesBreakpointsSetPathParams;
    queryParams: ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams;
    request?: shared.Breakpoint;
    security: ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurity;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsSetResponse extends SpeakeasyBase {
    contentType: string;
    setBreakpointResponse?: shared.SetBreakpointResponse;
    statusCode: number;
}
