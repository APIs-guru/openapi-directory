import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LoggingProjectsSinksPatchPathParams extends SpeakeasyBase {
    sinkName: string;
}
export declare class LoggingProjectsSinksPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uniqueWriterIdentity?: boolean;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class LoggingProjectsSinksPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsSinksPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingProjectsSinksPatchSecurity extends SpeakeasyBase {
    option1?: LoggingProjectsSinksPatchSecurityOption1;
    option2?: LoggingProjectsSinksPatchSecurityOption2;
}
export declare class LoggingProjectsSinksPatchRequest extends SpeakeasyBase {
    pathParams: LoggingProjectsSinksPatchPathParams;
    queryParams: LoggingProjectsSinksPatchQueryParams;
    request?: shared.LogSink;
    security: LoggingProjectsSinksPatchSecurity;
}
export declare class LoggingProjectsSinksPatchResponse extends SpeakeasyBase {
    contentType: string;
    logSink?: shared.LogSink;
    statusCode: number;
}
