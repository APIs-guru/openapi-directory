import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ScriptProjectsVersionsGetPathParams extends SpeakeasyBase {
    scriptId: string;
    versionNumber: number;
}
export declare class ScriptProjectsVersionsGetQueryParams extends SpeakeasyBase {
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
export declare class ScriptProjectsVersionsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptProjectsVersionsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptProjectsVersionsGetSecurity extends SpeakeasyBase {
    option1?: ScriptProjectsVersionsGetSecurityOption1;
    option2?: ScriptProjectsVersionsGetSecurityOption2;
}
export declare class ScriptProjectsVersionsGetRequest extends SpeakeasyBase {
    pathParams: ScriptProjectsVersionsGetPathParams;
    queryParams: ScriptProjectsVersionsGetQueryParams;
    security: ScriptProjectsVersionsGetSecurity;
}
export declare class ScriptProjectsVersionsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    version?: shared.Version;
}
