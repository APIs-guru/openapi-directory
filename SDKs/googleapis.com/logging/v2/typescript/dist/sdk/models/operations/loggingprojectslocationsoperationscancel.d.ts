import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LoggingProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class LoggingProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class LoggingProjectsLocationsOperationsCancelSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsOperationsCancelSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    option1?: LoggingProjectsLocationsOperationsCancelSecurityOption1;
    option2?: LoggingProjectsLocationsOperationsCancelSecurityOption2;
}
export declare class LoggingProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: LoggingProjectsLocationsOperationsCancelPathParams;
    queryParams: LoggingProjectsLocationsOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: LoggingProjectsLocationsOperationsCancelSecurity;
}
export declare class LoggingProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
