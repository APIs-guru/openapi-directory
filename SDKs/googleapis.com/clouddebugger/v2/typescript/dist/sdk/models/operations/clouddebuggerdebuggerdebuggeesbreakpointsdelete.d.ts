import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsDeletePathParams extends SpeakeasyBase {
    breakpointId: string;
    debuggeeId: string;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsDeleteQueryParams extends SpeakeasyBase {
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
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurity extends SpeakeasyBase {
    option1?: ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption1;
    option2?: ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption2;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsDeleteRequest extends SpeakeasyBase {
    pathParams: ClouddebuggerDebuggerDebuggeesBreakpointsDeletePathParams;
    queryParams: ClouddebuggerDebuggerDebuggeesBreakpointsDeleteQueryParams;
    security: ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurity;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
