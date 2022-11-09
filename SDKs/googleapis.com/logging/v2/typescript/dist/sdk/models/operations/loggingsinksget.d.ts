import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LoggingSinksGetPathParams extends SpeakeasyBase {
    sinkName: string;
}
export declare class LoggingSinksGetQueryParams extends SpeakeasyBase {
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
export declare class LoggingSinksGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingSinksGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingSinksGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingSinksGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingSinksGetSecurity extends SpeakeasyBase {
    option1?: LoggingSinksGetSecurityOption1;
    option2?: LoggingSinksGetSecurityOption2;
    option3?: LoggingSinksGetSecurityOption3;
    option4?: LoggingSinksGetSecurityOption4;
}
export declare class LoggingSinksGetRequest extends SpeakeasyBase {
    pathParams: LoggingSinksGetPathParams;
    queryParams: LoggingSinksGetQueryParams;
    security: LoggingSinksGetSecurity;
}
export declare class LoggingSinksGetResponse extends SpeakeasyBase {
    contentType: string;
    logSink?: shared.LogSink;
    statusCode: number;
}
