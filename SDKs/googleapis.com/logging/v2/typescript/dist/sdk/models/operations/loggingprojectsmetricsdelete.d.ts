import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LoggingProjectsMetricsDeletePathParams extends SpeakeasyBase {
    metricName: string;
}
export declare class LoggingProjectsMetricsDeleteQueryParams extends SpeakeasyBase {
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
export declare class LoggingProjectsMetricsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsMetricsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsMetricsDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsMetricsDeleteSecurity extends SpeakeasyBase {
    option1?: LoggingProjectsMetricsDeleteSecurityOption1;
    option2?: LoggingProjectsMetricsDeleteSecurityOption2;
    option3?: LoggingProjectsMetricsDeleteSecurityOption3;
}
export declare class LoggingProjectsMetricsDeleteRequest extends SpeakeasyBase {
    pathParams: LoggingProjectsMetricsDeletePathParams;
    queryParams: LoggingProjectsMetricsDeleteQueryParams;
    security: LoggingProjectsMetricsDeleteSecurity;
}
export declare class LoggingProjectsMetricsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
