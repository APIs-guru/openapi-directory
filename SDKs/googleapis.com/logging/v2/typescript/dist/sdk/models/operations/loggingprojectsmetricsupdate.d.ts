import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LoggingProjectsMetricsUpdatePathParams extends SpeakeasyBase {
    metricName: string;
}
export declare class LoggingProjectsMetricsUpdateQueryParams extends SpeakeasyBase {
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
export declare class LoggingProjectsMetricsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsMetricsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsMetricsUpdateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsMetricsUpdateSecurity extends SpeakeasyBase {
    option1?: LoggingProjectsMetricsUpdateSecurityOption1;
    option2?: LoggingProjectsMetricsUpdateSecurityOption2;
    option3?: LoggingProjectsMetricsUpdateSecurityOption3;
}
export declare class LoggingProjectsMetricsUpdateRequest extends SpeakeasyBase {
    pathParams: LoggingProjectsMetricsUpdatePathParams;
    queryParams: LoggingProjectsMetricsUpdateQueryParams;
    request?: shared.LogMetric;
    security: LoggingProjectsMetricsUpdateSecurity;
}
export declare class LoggingProjectsMetricsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    logMetric?: shared.LogMetric;
    statusCode: number;
}
