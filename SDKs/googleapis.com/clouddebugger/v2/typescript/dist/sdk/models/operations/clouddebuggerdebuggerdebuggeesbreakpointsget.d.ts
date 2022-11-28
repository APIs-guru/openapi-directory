import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsGetPathParams extends SpeakeasyBase {
    breakpointId: string;
    debuggeeId: string;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    clientVersion?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurity extends SpeakeasyBase {
    option1?: ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption1;
    option2?: ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption2;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsGetRequest extends SpeakeasyBase {
    pathParams: ClouddebuggerDebuggerDebuggeesBreakpointsGetPathParams;
    queryParams: ClouddebuggerDebuggerDebuggeesBreakpointsGetQueryParams;
    security: ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurity;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsGetResponse extends SpeakeasyBase {
    contentType: string;
    getBreakpointResponse?: shared.GetBreakpointResponse;
    statusCode: number;
}
