import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ScriptProjectsVersionsCreatePathParams extends SpeakeasyBase {
    scriptId: string;
}
export declare class ScriptProjectsVersionsCreateQueryParams extends SpeakeasyBase {
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
export declare class ScriptProjectsVersionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptProjectsVersionsCreateRequest extends SpeakeasyBase {
    pathParams: ScriptProjectsVersionsCreatePathParams;
    queryParams: ScriptProjectsVersionsCreateQueryParams;
    request?: shared.Version;
    security: ScriptProjectsVersionsCreateSecurity;
}
export declare class ScriptProjectsVersionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    version?: shared.Version;
}
