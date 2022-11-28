import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SourcerepoProjectsReposCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SourcerepoProjectsReposCreateQueryParams extends SpeakeasyBase {
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
export declare class SourcerepoProjectsReposCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SourcerepoProjectsReposCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SourcerepoProjectsReposCreateSecurity extends SpeakeasyBase {
    option1?: SourcerepoProjectsReposCreateSecurityOption1;
    option2?: SourcerepoProjectsReposCreateSecurityOption2;
}
export declare class SourcerepoProjectsReposCreateRequest extends SpeakeasyBase {
    pathParams: SourcerepoProjectsReposCreatePathParams;
    queryParams: SourcerepoProjectsReposCreateQueryParams;
    request?: shared.Repo;
    security: SourcerepoProjectsReposCreateSecurity;
}
export declare class SourcerepoProjectsReposCreateResponse extends SpeakeasyBase {
    contentType: string;
    repo?: shared.Repo;
    statusCode: number;
}
