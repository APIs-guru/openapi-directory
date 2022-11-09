import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LoggingProjectsLogsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class LoggingProjectsLogsListQueryParams extends SpeakeasyBase {
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
    resourceNames?: string[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class LoggingProjectsLogsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLogsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLogsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLogsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLogsListSecurity extends SpeakeasyBase {
    option1?: LoggingProjectsLogsListSecurityOption1;
    option2?: LoggingProjectsLogsListSecurityOption2;
    option3?: LoggingProjectsLogsListSecurityOption3;
    option4?: LoggingProjectsLogsListSecurityOption4;
}
export declare class LoggingProjectsLogsListRequest extends SpeakeasyBase {
    pathParams: LoggingProjectsLogsListPathParams;
    queryParams: LoggingProjectsLogsListQueryParams;
    security: LoggingProjectsLogsListSecurity;
}
export declare class LoggingProjectsLogsListResponse extends SpeakeasyBase {
    contentType: string;
    listLogsResponse?: shared.ListLogsResponse;
    statusCode: number;
}
