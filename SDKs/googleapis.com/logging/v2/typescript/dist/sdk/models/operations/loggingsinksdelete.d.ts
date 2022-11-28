import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LoggingSinksDeletePathParams extends SpeakeasyBase {
    sinkName: string;
}
export declare class LoggingSinksDeleteQueryParams extends SpeakeasyBase {
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
export declare class LoggingSinksDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingSinksDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingSinksDeleteSecurity extends SpeakeasyBase {
    option1?: LoggingSinksDeleteSecurityOption1;
    option2?: LoggingSinksDeleteSecurityOption2;
}
export declare class LoggingSinksDeleteRequest extends SpeakeasyBase {
    pathParams: LoggingSinksDeletePathParams;
    queryParams: LoggingSinksDeleteQueryParams;
    security: LoggingSinksDeleteSecurity;
}
export declare class LoggingSinksDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
