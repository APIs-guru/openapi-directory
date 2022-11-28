import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouddebuggerControllerDebuggeesRegisterQueryParams extends SpeakeasyBase {
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
export declare class ClouddebuggerControllerDebuggeesRegisterSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddebuggerControllerDebuggeesRegisterSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddebuggerControllerDebuggeesRegisterSecurity extends SpeakeasyBase {
    option1?: ClouddebuggerControllerDebuggeesRegisterSecurityOption1;
    option2?: ClouddebuggerControllerDebuggeesRegisterSecurityOption2;
}
export declare class ClouddebuggerControllerDebuggeesRegisterRequest extends SpeakeasyBase {
    queryParams: ClouddebuggerControllerDebuggeesRegisterQueryParams;
    request?: shared.RegisterDebuggeeRequest;
    security: ClouddebuggerControllerDebuggeesRegisterSecurity;
}
export declare class ClouddebuggerControllerDebuggeesRegisterResponse extends SpeakeasyBase {
    contentType: string;
    registerDebuggeeResponse?: shared.RegisterDebuggeeResponse;
    statusCode: number;
}
