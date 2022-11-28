import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ScriptScriptsRunPathParams extends SpeakeasyBase {
    scriptId: string;
}
export declare class ScriptScriptsRunQueryParams extends SpeakeasyBase {
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
export declare class ScriptScriptsRunSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptScriptsRunSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptScriptsRunSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptScriptsRunSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptScriptsRunSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptScriptsRunSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptScriptsRunSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptScriptsRunSecurityOption8 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptScriptsRunSecurityOption9 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptScriptsRunSecurityOption10 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptScriptsRunSecurityOption11 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptScriptsRunSecurityOption12 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptScriptsRunSecurity extends SpeakeasyBase {
    option1?: ScriptScriptsRunSecurityOption1;
    option2?: ScriptScriptsRunSecurityOption2;
    option3?: ScriptScriptsRunSecurityOption3;
    option4?: ScriptScriptsRunSecurityOption4;
    option5?: ScriptScriptsRunSecurityOption5;
    option6?: ScriptScriptsRunSecurityOption6;
    option7?: ScriptScriptsRunSecurityOption7;
    option8?: ScriptScriptsRunSecurityOption8;
    option9?: ScriptScriptsRunSecurityOption9;
    option10?: ScriptScriptsRunSecurityOption10;
    option11?: ScriptScriptsRunSecurityOption11;
    option12?: ScriptScriptsRunSecurityOption12;
}
export declare class ScriptScriptsRunRequest extends SpeakeasyBase {
    pathParams: ScriptScriptsRunPathParams;
    queryParams: ScriptScriptsRunQueryParams;
    request?: shared.ExecutionRequest;
    security: ScriptScriptsRunSecurity;
}
export declare class ScriptScriptsRunResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
