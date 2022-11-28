import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesDatabasesSessionsExecuteSqlPathParams extends SpeakeasyBase {
    session: string;
}
export declare class SpannerProjectsInstancesDatabasesSessionsExecuteSqlQueryParams extends SpeakeasyBase {
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
export declare class SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurityOption1;
    option2?: SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurityOption2;
}
export declare class SpannerProjectsInstancesDatabasesSessionsExecuteSqlRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesDatabasesSessionsExecuteSqlPathParams;
    queryParams: SpannerProjectsInstancesDatabasesSessionsExecuteSqlQueryParams;
    request?: shared.ExecuteSqlRequest;
    security: SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurity;
}
export declare class SpannerProjectsInstancesDatabasesSessionsExecuteSqlResponse extends SpeakeasyBase {
    contentType: string;
    resultSet?: shared.ResultSet;
    statusCode: number;
}
