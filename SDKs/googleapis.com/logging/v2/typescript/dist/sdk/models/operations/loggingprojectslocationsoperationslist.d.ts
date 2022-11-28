import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LoggingProjectsLocationsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class LoggingProjectsLocationsOperationsListQueryParams extends SpeakeasyBase {
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
export declare class LoggingProjectsLocationsOperationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsOperationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsOperationsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsOperationsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsOperationsListSecurity extends SpeakeasyBase {
    option1?: LoggingProjectsLocationsOperationsListSecurityOption1;
    option2?: LoggingProjectsLocationsOperationsListSecurityOption2;
    option3?: LoggingProjectsLocationsOperationsListSecurityOption3;
    option4?: LoggingProjectsLocationsOperationsListSecurityOption4;
}
export declare class LoggingProjectsLocationsOperationsListRequest extends SpeakeasyBase {
    pathParams: LoggingProjectsLocationsOperationsListPathParams;
    queryParams: LoggingProjectsLocationsOperationsListQueryParams;
    security: LoggingProjectsLocationsOperationsListSecurity;
}
export declare class LoggingProjectsLocationsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
