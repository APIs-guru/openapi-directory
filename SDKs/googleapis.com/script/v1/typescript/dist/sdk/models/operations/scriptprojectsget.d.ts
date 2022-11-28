import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ScriptProjectsGetPathParams extends SpeakeasyBase {
    scriptId: string;
}
export declare class ScriptProjectsGetQueryParams extends SpeakeasyBase {
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
export declare class ScriptProjectsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptProjectsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptProjectsGetSecurity extends SpeakeasyBase {
    option1?: ScriptProjectsGetSecurityOption1;
    option2?: ScriptProjectsGetSecurityOption2;
}
export declare class ScriptProjectsGetRequest extends SpeakeasyBase {
    pathParams: ScriptProjectsGetPathParams;
    queryParams: ScriptProjectsGetQueryParams;
    security: ScriptProjectsGetSecurity;
}
export declare class ScriptProjectsGetResponse extends SpeakeasyBase {
    contentType: string;
    project?: shared.Project;
    statusCode: number;
}
