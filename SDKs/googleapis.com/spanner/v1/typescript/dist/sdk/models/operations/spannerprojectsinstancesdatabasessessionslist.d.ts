import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesDatabasesSessionsListPathParams extends SpeakeasyBase {
    database: string;
}
export declare class SpannerProjectsInstancesDatabasesSessionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SpannerProjectsInstancesDatabasesSessionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesSessionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesSessionsListSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesDatabasesSessionsListSecurityOption1;
    option2?: SpannerProjectsInstancesDatabasesSessionsListSecurityOption2;
}
export declare class SpannerProjectsInstancesDatabasesSessionsListRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesDatabasesSessionsListPathParams;
    queryParams: SpannerProjectsInstancesDatabasesSessionsListQueryParams;
    security: SpannerProjectsInstancesDatabasesSessionsListSecurity;
}
export declare class SpannerProjectsInstancesDatabasesSessionsListResponse extends SpeakeasyBase {
    contentType: string;
    listSessionsResponse?: shared.ListSessionsResponse;
    statusCode: number;
}
