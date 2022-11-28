import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesDatabaseOperationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SpannerProjectsInstancesDatabaseOperationsListQueryParams extends SpeakeasyBase {
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
export declare class SpannerProjectsInstancesDatabaseOperationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabaseOperationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabaseOperationsListSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesDatabaseOperationsListSecurityOption1;
    option2?: SpannerProjectsInstancesDatabaseOperationsListSecurityOption2;
}
export declare class SpannerProjectsInstancesDatabaseOperationsListRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesDatabaseOperationsListPathParams;
    queryParams: SpannerProjectsInstancesDatabaseOperationsListQueryParams;
    security: SpannerProjectsInstancesDatabaseOperationsListSecurity;
}
export declare class SpannerProjectsInstancesDatabaseOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listDatabaseOperationsResponse?: shared.ListDatabaseOperationsResponse;
    statusCode: number;
}
