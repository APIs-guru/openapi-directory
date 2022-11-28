import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SourcerepoProjectsReposListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class SourcerepoProjectsReposListQueryParams extends SpeakeasyBase {
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
export declare class SourcerepoProjectsReposListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SourcerepoProjectsReposListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SourcerepoProjectsReposListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SourcerepoProjectsReposListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SourcerepoProjectsReposListSecurity extends SpeakeasyBase {
    option1?: SourcerepoProjectsReposListSecurityOption1;
    option2?: SourcerepoProjectsReposListSecurityOption2;
    option3?: SourcerepoProjectsReposListSecurityOption3;
    option4?: SourcerepoProjectsReposListSecurityOption4;
}
export declare class SourcerepoProjectsReposListRequest extends SpeakeasyBase {
    pathParams: SourcerepoProjectsReposListPathParams;
    queryParams: SourcerepoProjectsReposListQueryParams;
    security: SourcerepoProjectsReposListSecurity;
}
export declare class SourcerepoProjectsReposListResponse extends SpeakeasyBase {
    contentType: string;
    listReposResponse?: shared.ListReposResponse;
    statusCode: number;
}
