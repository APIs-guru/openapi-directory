import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesDatabasesSessionsReadPathParams extends SpeakeasyBase {
    session: string;
}
export declare class SpannerProjectsInstancesDatabasesSessionsReadQueryParams extends SpeakeasyBase {
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
export declare class SpannerProjectsInstancesDatabasesSessionsReadSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesSessionsReadSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesSessionsReadSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesDatabasesSessionsReadSecurityOption1;
    option2?: SpannerProjectsInstancesDatabasesSessionsReadSecurityOption2;
}
export declare class SpannerProjectsInstancesDatabasesSessionsReadRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesDatabasesSessionsReadPathParams;
    queryParams: SpannerProjectsInstancesDatabasesSessionsReadQueryParams;
    request?: shared.ReadRequest;
    security: SpannerProjectsInstancesDatabasesSessionsReadSecurity;
}
export declare class SpannerProjectsInstancesDatabasesSessionsReadResponse extends SpeakeasyBase {
    contentType: string;
    resultSet?: shared.ResultSet;
    statusCode: number;
}
