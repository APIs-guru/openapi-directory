import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesDatabasesSessionsStreamingReadPathParams extends SpeakeasyBase {
    session: string;
}
export declare class SpannerProjectsInstancesDatabasesSessionsStreamingReadQueryParams extends SpeakeasyBase {
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
export declare class SpannerProjectsInstancesDatabasesSessionsStreamingReadSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesSessionsStreamingReadSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesSessionsStreamingReadSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesDatabasesSessionsStreamingReadSecurityOption1;
    option2?: SpannerProjectsInstancesDatabasesSessionsStreamingReadSecurityOption2;
}
export declare class SpannerProjectsInstancesDatabasesSessionsStreamingReadRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesDatabasesSessionsStreamingReadPathParams;
    queryParams: SpannerProjectsInstancesDatabasesSessionsStreamingReadQueryParams;
    request?: shared.ReadRequest;
    security: SpannerProjectsInstancesDatabasesSessionsStreamingReadSecurity;
}
export declare class SpannerProjectsInstancesDatabasesSessionsStreamingReadResponse extends SpeakeasyBase {
    contentType: string;
    partialResultSet?: shared.PartialResultSet;
    statusCode: number;
}
