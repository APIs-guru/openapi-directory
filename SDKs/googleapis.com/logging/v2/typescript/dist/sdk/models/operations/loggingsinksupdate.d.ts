import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LoggingSinksUpdatePathParams extends SpeakeasyBase {
    sinkName: string;
}
export declare class LoggingSinksUpdateQueryParams extends SpeakeasyBase {
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
export declare class LoggingSinksUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingSinksUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingSinksUpdateSecurity extends SpeakeasyBase {
    option1?: LoggingSinksUpdateSecurityOption1;
    option2?: LoggingSinksUpdateSecurityOption2;
}
export declare class LoggingSinksUpdateRequest extends SpeakeasyBase {
    pathParams: LoggingSinksUpdatePathParams;
    queryParams: LoggingSinksUpdateQueryParams;
    request?: shared.LogSink;
    security: LoggingSinksUpdateSecurity;
}
export declare class LoggingSinksUpdateResponse extends SpeakeasyBase {
    contentType: string;
    logSink?: shared.LogSink;
    statusCode: number;
}
