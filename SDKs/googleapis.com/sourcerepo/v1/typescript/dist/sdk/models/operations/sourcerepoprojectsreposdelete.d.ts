import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SourcerepoProjectsReposDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class SourcerepoProjectsReposDeleteQueryParams extends SpeakeasyBase {
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
export declare class SourcerepoProjectsReposDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SourcerepoProjectsReposDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SourcerepoProjectsReposDeleteSecurity extends SpeakeasyBase {
    option1?: SourcerepoProjectsReposDeleteSecurityOption1;
    option2?: SourcerepoProjectsReposDeleteSecurityOption2;
}
export declare class SourcerepoProjectsReposDeleteRequest extends SpeakeasyBase {
    pathParams: SourcerepoProjectsReposDeletePathParams;
    queryParams: SourcerepoProjectsReposDeleteQueryParams;
    security: SourcerepoProjectsReposDeleteSecurity;
}
export declare class SourcerepoProjectsReposDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
