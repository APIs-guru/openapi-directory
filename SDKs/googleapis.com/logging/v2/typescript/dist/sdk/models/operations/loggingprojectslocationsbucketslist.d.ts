import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LoggingProjectsLocationsBucketsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class LoggingProjectsLocationsBucketsListQueryParams extends SpeakeasyBase {
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
export declare class LoggingProjectsLocationsBucketsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsBucketsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsBucketsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsBucketsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsBucketsListSecurity extends SpeakeasyBase {
    option1?: LoggingProjectsLocationsBucketsListSecurityOption1;
    option2?: LoggingProjectsLocationsBucketsListSecurityOption2;
    option3?: LoggingProjectsLocationsBucketsListSecurityOption3;
    option4?: LoggingProjectsLocationsBucketsListSecurityOption4;
}
export declare class LoggingProjectsLocationsBucketsListRequest extends SpeakeasyBase {
    pathParams: LoggingProjectsLocationsBucketsListPathParams;
    queryParams: LoggingProjectsLocationsBucketsListQueryParams;
    security: LoggingProjectsLocationsBucketsListSecurity;
}
export declare class LoggingProjectsLocationsBucketsListResponse extends SpeakeasyBase {
    contentType: string;
    listBucketsResponse?: shared.ListBucketsResponse;
    statusCode: number;
}
