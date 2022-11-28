import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LoggingProjectsLocationsBucketsViewsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class LoggingProjectsLocationsBucketsViewsListQueryParams extends SpeakeasyBase {
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
export declare class LoggingProjectsLocationsBucketsViewsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsBucketsViewsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsBucketsViewsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsBucketsViewsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsBucketsViewsListSecurity extends SpeakeasyBase {
    option1?: LoggingProjectsLocationsBucketsViewsListSecurityOption1;
    option2?: LoggingProjectsLocationsBucketsViewsListSecurityOption2;
    option3?: LoggingProjectsLocationsBucketsViewsListSecurityOption3;
    option4?: LoggingProjectsLocationsBucketsViewsListSecurityOption4;
}
export declare class LoggingProjectsLocationsBucketsViewsListRequest extends SpeakeasyBase {
    pathParams: LoggingProjectsLocationsBucketsViewsListPathParams;
    queryParams: LoggingProjectsLocationsBucketsViewsListQueryParams;
    security: LoggingProjectsLocationsBucketsViewsListSecurity;
}
export declare class LoggingProjectsLocationsBucketsViewsListResponse extends SpeakeasyBase {
    contentType: string;
    listViewsResponse?: shared.ListViewsResponse;
    statusCode: number;
}
