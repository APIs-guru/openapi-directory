import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LoggingProjectsLocationsBucketsViewsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class LoggingProjectsLocationsBucketsViewsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class LoggingProjectsLocationsBucketsViewsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsBucketsViewsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsBucketsViewsPatchSecurity extends SpeakeasyBase {
    option1?: LoggingProjectsLocationsBucketsViewsPatchSecurityOption1;
    option2?: LoggingProjectsLocationsBucketsViewsPatchSecurityOption2;
}
export declare class LoggingProjectsLocationsBucketsViewsPatchRequest extends SpeakeasyBase {
    pathParams: LoggingProjectsLocationsBucketsViewsPatchPathParams;
    queryParams: LoggingProjectsLocationsBucketsViewsPatchQueryParams;
    request?: shared.LogViewInput;
    security: LoggingProjectsLocationsBucketsViewsPatchSecurity;
}
export declare class LoggingProjectsLocationsBucketsViewsPatchResponse extends SpeakeasyBase {
    contentType: string;
    logView?: shared.LogView;
    statusCode: number;
}
