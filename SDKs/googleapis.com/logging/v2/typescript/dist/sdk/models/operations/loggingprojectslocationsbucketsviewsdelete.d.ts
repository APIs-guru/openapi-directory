import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LoggingProjectsLocationsBucketsViewsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class LoggingProjectsLocationsBucketsViewsDeleteQueryParams extends SpeakeasyBase {
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
export declare class LoggingProjectsLocationsBucketsViewsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsBucketsViewsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsBucketsViewsDeleteSecurity extends SpeakeasyBase {
    option1?: LoggingProjectsLocationsBucketsViewsDeleteSecurityOption1;
    option2?: LoggingProjectsLocationsBucketsViewsDeleteSecurityOption2;
}
export declare class LoggingProjectsLocationsBucketsViewsDeleteRequest extends SpeakeasyBase {
    pathParams: LoggingProjectsLocationsBucketsViewsDeletePathParams;
    queryParams: LoggingProjectsLocationsBucketsViewsDeleteQueryParams;
    security: LoggingProjectsLocationsBucketsViewsDeleteSecurity;
}
export declare class LoggingProjectsLocationsBucketsViewsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
