import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LoggingProjectsLogsDeletePathParams extends SpeakeasyBase {
    logName: string;
}
export declare class LoggingProjectsLogsDeleteQueryParams extends SpeakeasyBase {
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
export declare class LoggingProjectsLogsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLogsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLogsDeleteSecurity extends SpeakeasyBase {
    option1?: LoggingProjectsLogsDeleteSecurityOption1;
    option2?: LoggingProjectsLogsDeleteSecurityOption2;
}
export declare class LoggingProjectsLogsDeleteRequest extends SpeakeasyBase {
    pathParams: LoggingProjectsLogsDeletePathParams;
    queryParams: LoggingProjectsLogsDeleteQueryParams;
    security: LoggingProjectsLogsDeleteSecurity;
}
export declare class LoggingProjectsLogsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
