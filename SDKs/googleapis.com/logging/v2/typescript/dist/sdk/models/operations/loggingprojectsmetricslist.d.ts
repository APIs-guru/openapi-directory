import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LoggingProjectsMetricsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class LoggingProjectsMetricsListQueryParams extends SpeakeasyBase {
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
export declare class LoggingProjectsMetricsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsMetricsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsMetricsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsMetricsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsMetricsListSecurity extends SpeakeasyBase {
    option1?: LoggingProjectsMetricsListSecurityOption1;
    option2?: LoggingProjectsMetricsListSecurityOption2;
    option3?: LoggingProjectsMetricsListSecurityOption3;
    option4?: LoggingProjectsMetricsListSecurityOption4;
}
export declare class LoggingProjectsMetricsListRequest extends SpeakeasyBase {
    pathParams: LoggingProjectsMetricsListPathParams;
    queryParams: LoggingProjectsMetricsListQueryParams;
    security: LoggingProjectsMetricsListSecurity;
}
export declare class LoggingProjectsMetricsListResponse extends SpeakeasyBase {
    contentType: string;
    listLogMetricsResponse?: shared.ListLogMetricsResponse;
    statusCode: number;
}
