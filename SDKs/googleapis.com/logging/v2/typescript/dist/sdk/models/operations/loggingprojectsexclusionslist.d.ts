import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LoggingProjectsExclusionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class LoggingProjectsExclusionsListQueryParams extends SpeakeasyBase {
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
export declare class LoggingProjectsExclusionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsExclusionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsExclusionsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsExclusionsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsExclusionsListSecurity extends SpeakeasyBase {
    option1?: LoggingProjectsExclusionsListSecurityOption1;
    option2?: LoggingProjectsExclusionsListSecurityOption2;
    option3?: LoggingProjectsExclusionsListSecurityOption3;
    option4?: LoggingProjectsExclusionsListSecurityOption4;
}
export declare class LoggingProjectsExclusionsListRequest extends SpeakeasyBase {
    pathParams: LoggingProjectsExclusionsListPathParams;
    queryParams: LoggingProjectsExclusionsListQueryParams;
    security: LoggingProjectsExclusionsListSecurity;
}
export declare class LoggingProjectsExclusionsListResponse extends SpeakeasyBase {
    contentType: string;
    listExclusionsResponse?: shared.ListExclusionsResponse;
    statusCode: number;
}
