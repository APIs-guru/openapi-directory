import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsListPathParams extends SpeakeasyBase {
    debuggeeId: string;
}
export declare enum ClouddebuggerDebuggerDebuggeesBreakpointsListActionValueEnum {
    Capture = "CAPTURE",
    Log = "LOG"
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    actionValue?: ClouddebuggerDebuggerDebuggeesBreakpointsListActionValueEnum;
    alt?: shared.AltEnum;
    callback?: string;
    clientVersion?: string;
    fields?: string;
    includeAllUsers?: boolean;
    includeInactive?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    stripResults?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
    waitToken?: string;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsListSecurity extends SpeakeasyBase {
    option1?: ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption1;
    option2?: ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption2;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsListRequest extends SpeakeasyBase {
    pathParams: ClouddebuggerDebuggerDebuggeesBreakpointsListPathParams;
    queryParams: ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams;
    security: ClouddebuggerDebuggerDebuggeesBreakpointsListSecurity;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsListResponse extends SpeakeasyBase {
    contentType: string;
    listBreakpointsResponse?: shared.ListBreakpointsResponse;
    statusCode: number;
}
