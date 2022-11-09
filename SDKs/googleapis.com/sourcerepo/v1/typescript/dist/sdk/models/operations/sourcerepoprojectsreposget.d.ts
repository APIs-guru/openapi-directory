import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SourcerepoProjectsReposGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class SourcerepoProjectsReposGetQueryParams extends SpeakeasyBase {
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
export declare class SourcerepoProjectsReposGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SourcerepoProjectsReposGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SourcerepoProjectsReposGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SourcerepoProjectsReposGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SourcerepoProjectsReposGetSecurity extends SpeakeasyBase {
    option1?: SourcerepoProjectsReposGetSecurityOption1;
    option2?: SourcerepoProjectsReposGetSecurityOption2;
    option3?: SourcerepoProjectsReposGetSecurityOption3;
    option4?: SourcerepoProjectsReposGetSecurityOption4;
}
export declare class SourcerepoProjectsReposGetRequest extends SpeakeasyBase {
    pathParams: SourcerepoProjectsReposGetPathParams;
    queryParams: SourcerepoProjectsReposGetQueryParams;
    security: SourcerepoProjectsReposGetSecurity;
}
export declare class SourcerepoProjectsReposGetResponse extends SpeakeasyBase {
    contentType: string;
    repo?: shared.Repo;
    statusCode: number;
}
