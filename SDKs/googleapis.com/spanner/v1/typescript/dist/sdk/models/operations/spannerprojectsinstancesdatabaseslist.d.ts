import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesDatabasesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SpannerProjectsInstancesDatabasesListQueryParams extends SpeakeasyBase {
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
export declare class SpannerProjectsInstancesDatabasesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesListSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesDatabasesListSecurityOption1;
    option2?: SpannerProjectsInstancesDatabasesListSecurityOption2;
}
export declare class SpannerProjectsInstancesDatabasesListRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesDatabasesListPathParams;
    queryParams: SpannerProjectsInstancesDatabasesListQueryParams;
    security: SpannerProjectsInstancesDatabasesListSecurity;
}
export declare class SpannerProjectsInstancesDatabasesListResponse extends SpeakeasyBase {
    contentType: string;
    listDatabasesResponse?: shared.ListDatabasesResponse;
    statusCode: number;
}
