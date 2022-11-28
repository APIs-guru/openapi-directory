import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlPathParams extends SpeakeasyBase {
    session: string;
}
export declare class SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlQueryParams extends SpeakeasyBase {
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
export declare class SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurityOption1;
    option2?: SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurityOption2;
}
export declare class SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlPathParams;
    queryParams: SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlQueryParams;
    request?: shared.ExecuteSqlRequest;
    security: SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurity;
}
export declare class SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlResponse extends SpeakeasyBase {
    contentType: string;
    partialResultSet?: shared.PartialResultSet;
    statusCode: number;
}
