import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ScriptProjectsGetContentPathParams extends SpeakeasyBase {
    scriptId: string;
}
export declare class ScriptProjectsGetContentQueryParams extends SpeakeasyBase {
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
    versionNumber?: number;
}
export declare class ScriptProjectsGetContentSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptProjectsGetContentSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptProjectsGetContentSecurity extends SpeakeasyBase {
    option1?: ScriptProjectsGetContentSecurityOption1;
    option2?: ScriptProjectsGetContentSecurityOption2;
}
export declare class ScriptProjectsGetContentRequest extends SpeakeasyBase {
    pathParams: ScriptProjectsGetContentPathParams;
    queryParams: ScriptProjectsGetContentQueryParams;
    security: ScriptProjectsGetContentSecurity;
}
export declare class ScriptProjectsGetContentResponse extends SpeakeasyBase {
    content?: shared.Content;
    contentType: string;
    statusCode: number;
}
