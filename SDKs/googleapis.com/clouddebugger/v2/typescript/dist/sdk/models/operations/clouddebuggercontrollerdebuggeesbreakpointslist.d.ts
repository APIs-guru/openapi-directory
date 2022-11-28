import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouddebuggerControllerDebuggeesBreakpointsListPathParams extends SpeakeasyBase {
    debuggeeId: string;
}
export declare class ClouddebuggerControllerDebuggeesBreakpointsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    agentId?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    successOnTimeout?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
    waitToken?: string;
}
export declare class ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddebuggerControllerDebuggeesBreakpointsListSecurity extends SpeakeasyBase {
    option1?: ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1;
    option2?: ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption2;
}
export declare class ClouddebuggerControllerDebuggeesBreakpointsListRequest extends SpeakeasyBase {
    pathParams: ClouddebuggerControllerDebuggeesBreakpointsListPathParams;
    queryParams: ClouddebuggerControllerDebuggeesBreakpointsListQueryParams;
    security: ClouddebuggerControllerDebuggeesBreakpointsListSecurity;
}
export declare class ClouddebuggerControllerDebuggeesBreakpointsListResponse extends SpeakeasyBase {
    contentType: string;
    listActiveBreakpointsResponse?: shared.ListActiveBreakpointsResponse;
    statusCode: number;
}
