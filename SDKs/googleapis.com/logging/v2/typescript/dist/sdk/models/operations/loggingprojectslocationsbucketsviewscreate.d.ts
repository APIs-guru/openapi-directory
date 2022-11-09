import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LoggingProjectsLocationsBucketsViewsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class LoggingProjectsLocationsBucketsViewsCreateQueryParams extends SpeakeasyBase {
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
    viewId?: string;
}
export declare class LoggingProjectsLocationsBucketsViewsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsBucketsViewsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsBucketsViewsCreateSecurity extends SpeakeasyBase {
    option1?: LoggingProjectsLocationsBucketsViewsCreateSecurityOption1;
    option2?: LoggingProjectsLocationsBucketsViewsCreateSecurityOption2;
}
export declare class LoggingProjectsLocationsBucketsViewsCreateRequest extends SpeakeasyBase {
    pathParams: LoggingProjectsLocationsBucketsViewsCreatePathParams;
    queryParams: LoggingProjectsLocationsBucketsViewsCreateQueryParams;
    request?: shared.LogView;
    security: LoggingProjectsLocationsBucketsViewsCreateSecurity;
}
export declare class LoggingProjectsLocationsBucketsViewsCreateResponse extends SpeakeasyBase {
    contentType: string;
    logView?: shared.LogView;
    statusCode: number;
}
