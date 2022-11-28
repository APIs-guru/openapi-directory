import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LoggingProjectsLocationsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class LoggingProjectsLocationsOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class LoggingProjectsLocationsOperationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsOperationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsOperationsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsOperationsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsOperationsGetSecurity extends SpeakeasyBase {
    option1?: LoggingProjectsLocationsOperationsGetSecurityOption1;
    option2?: LoggingProjectsLocationsOperationsGetSecurityOption2;
    option3?: LoggingProjectsLocationsOperationsGetSecurityOption3;
    option4?: LoggingProjectsLocationsOperationsGetSecurityOption4;
}
export declare class LoggingProjectsLocationsOperationsGetRequest extends SpeakeasyBase {
    pathParams: LoggingProjectsLocationsOperationsGetPathParams;
    queryParams: LoggingProjectsLocationsOperationsGetQueryParams;
    security: LoggingProjectsLocationsOperationsGetSecurity;
}
export declare class LoggingProjectsLocationsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
