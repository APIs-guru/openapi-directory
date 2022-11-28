import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LoggingProjectsLocationsBucketsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class LoggingProjectsLocationsBucketsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    bucketId?: string;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class LoggingProjectsLocationsBucketsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsBucketsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsLocationsBucketsCreateSecurity extends SpeakeasyBase {
    option1?: LoggingProjectsLocationsBucketsCreateSecurityOption1;
    option2?: LoggingProjectsLocationsBucketsCreateSecurityOption2;
}
export declare class LoggingProjectsLocationsBucketsCreateRequest extends SpeakeasyBase {
    pathParams: LoggingProjectsLocationsBucketsCreatePathParams;
    queryParams: LoggingProjectsLocationsBucketsCreateQueryParams;
    request?: shared.LogBucketInput;
    security: LoggingProjectsLocationsBucketsCreateSecurity;
}
export declare class LoggingProjectsLocationsBucketsCreateResponse extends SpeakeasyBase {
    contentType: string;
    logBucket?: shared.LogBucket;
    statusCode: number;
}
