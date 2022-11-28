import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouddebuggerControllerDebuggeesBreakpointsUpdatePathParams extends SpeakeasyBase {
    debuggeeId: string;
    id: string;
}
export declare class ClouddebuggerControllerDebuggeesBreakpointsUpdateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurity extends SpeakeasyBase {
    option1?: ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption1;
    option2?: ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption2;
}
export declare class ClouddebuggerControllerDebuggeesBreakpointsUpdateRequest extends SpeakeasyBase {
    pathParams: ClouddebuggerControllerDebuggeesBreakpointsUpdatePathParams;
    queryParams: ClouddebuggerControllerDebuggeesBreakpointsUpdateQueryParams;
    request?: shared.UpdateActiveBreakpointRequest;
    security: ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurity;
}
export declare class ClouddebuggerControllerDebuggeesBreakpointsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateActiveBreakpointResponse?: Map<string, any>;
}
