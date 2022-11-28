import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ScriptProjectsVersionsListPathParams extends SpeakeasyBase {
    scriptId: string;
}
export declare class ScriptProjectsVersionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ScriptProjectsVersionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptProjectsVersionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptProjectsVersionsListSecurity extends SpeakeasyBase {
    option1?: ScriptProjectsVersionsListSecurityOption1;
    option2?: ScriptProjectsVersionsListSecurityOption2;
}
export declare class ScriptProjectsVersionsListRequest extends SpeakeasyBase {
    pathParams: ScriptProjectsVersionsListPathParams;
    queryParams: ScriptProjectsVersionsListQueryParams;
    security: ScriptProjectsVersionsListSecurity;
}
export declare class ScriptProjectsVersionsListResponse extends SpeakeasyBase {
    contentType: string;
    listVersionsResponse?: shared.ListVersionsResponse;
    statusCode: number;
}
