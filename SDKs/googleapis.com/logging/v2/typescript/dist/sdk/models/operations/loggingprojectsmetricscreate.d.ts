import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LoggingProjectsMetricsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class LoggingProjectsMetricsCreateQueryParams extends SpeakeasyBase {
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
export declare class LoggingProjectsMetricsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsMetricsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsMetricsCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsMetricsCreateSecurity extends SpeakeasyBase {
    option1?: LoggingProjectsMetricsCreateSecurityOption1;
    option2?: LoggingProjectsMetricsCreateSecurityOption2;
    option3?: LoggingProjectsMetricsCreateSecurityOption3;
}
export declare class LoggingProjectsMetricsCreateRequest extends SpeakeasyBase {
    pathParams: LoggingProjectsMetricsCreatePathParams;
    queryParams: LoggingProjectsMetricsCreateQueryParams;
    request?: shared.LogMetric;
    security: LoggingProjectsMetricsCreateSecurity;
}
export declare class LoggingProjectsMetricsCreateResponse extends SpeakeasyBase {
    contentType: string;
    logMetric?: shared.LogMetric;
    statusCode: number;
}
