import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LoggingProjectsMetricsGetPathParams extends SpeakeasyBase {
    metricName: string;
}
export declare class LoggingProjectsMetricsGetQueryParams extends SpeakeasyBase {
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
export declare class LoggingProjectsMetricsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsMetricsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsMetricsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsMetricsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsMetricsGetSecurity extends SpeakeasyBase {
    option1?: LoggingProjectsMetricsGetSecurityOption1;
    option2?: LoggingProjectsMetricsGetSecurityOption2;
    option3?: LoggingProjectsMetricsGetSecurityOption3;
    option4?: LoggingProjectsMetricsGetSecurityOption4;
}
export declare class LoggingProjectsMetricsGetRequest extends SpeakeasyBase {
    pathParams: LoggingProjectsMetricsGetPathParams;
    queryParams: LoggingProjectsMetricsGetQueryParams;
    security: LoggingProjectsMetricsGetSecurity;
}
export declare class LoggingProjectsMetricsGetResponse extends SpeakeasyBase {
    contentType: string;
    logMetric?: shared.LogMetric;
    statusCode: number;
}
