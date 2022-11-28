import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LoggingProjectsLocationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class LoggingProjectsLocationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class LoggingProjectsLocationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsListSecurity extends SpeakeasyBase {
    option1?: LoggingProjectsLocationsListSecurityOption1;
    option2?: LoggingProjectsLocationsListSecurityOption2;
    option3?: LoggingProjectsLocationsListSecurityOption3;
    option4?: LoggingProjectsLocationsListSecurityOption4;
}
export declare class LoggingProjectsLocationsListRequest extends SpeakeasyBase {
    pathParams: LoggingProjectsLocationsListPathParams;
    queryParams: LoggingProjectsLocationsListQueryParams;
    security: LoggingProjectsLocationsListSecurity;
}
export declare class LoggingProjectsLocationsListResponse extends SpeakeasyBase {
    contentType: string;
    listLocationsResponse?: shared.ListLocationsResponse;
    statusCode: number;
}
