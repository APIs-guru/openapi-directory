import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LoggingSinksCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class LoggingSinksCreateQueryParams extends SpeakeasyBase {
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
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class LoggingSinksCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingSinksCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingSinksCreateSecurity extends SpeakeasyBase {
    option1?: LoggingSinksCreateSecurityOption1;
    option2?: LoggingSinksCreateSecurityOption2;
}
export declare class LoggingSinksCreateRequest extends SpeakeasyBase {
    pathParams: LoggingSinksCreatePathParams;
    queryParams: LoggingSinksCreateQueryParams;
    request?: shared.LogSinkInput;
    security: LoggingSinksCreateSecurity;
}
export declare class LoggingSinksCreateResponse extends SpeakeasyBase {
    contentType: string;
    logSink?: shared.LogSink;
    statusCode: number;
}
