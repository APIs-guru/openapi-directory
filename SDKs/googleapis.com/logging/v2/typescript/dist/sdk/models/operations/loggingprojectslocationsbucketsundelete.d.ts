import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LoggingProjectsLocationsBucketsUndeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class LoggingProjectsLocationsBucketsUndeleteQueryParams extends SpeakeasyBase {
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
export declare class LoggingProjectsLocationsBucketsUndeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsBucketsUndeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsBucketsUndeleteSecurity extends SpeakeasyBase {
    option1?: LoggingProjectsLocationsBucketsUndeleteSecurityOption1;
    option2?: LoggingProjectsLocationsBucketsUndeleteSecurityOption2;
}
export declare class LoggingProjectsLocationsBucketsUndeleteRequest extends SpeakeasyBase {
    pathParams: LoggingProjectsLocationsBucketsUndeletePathParams;
    queryParams: LoggingProjectsLocationsBucketsUndeleteQueryParams;
    request?: Map<string, any>;
    security: LoggingProjectsLocationsBucketsUndeleteSecurity;
}
export declare class LoggingProjectsLocationsBucketsUndeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
