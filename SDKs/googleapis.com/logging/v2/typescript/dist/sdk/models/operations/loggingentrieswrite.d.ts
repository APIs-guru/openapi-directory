import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LoggingEntriesWriteQueryParams extends SpeakeasyBase {
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
export declare class LoggingEntriesWriteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingEntriesWriteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingEntriesWriteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingEntriesWriteSecurity extends SpeakeasyBase {
    option1?: LoggingEntriesWriteSecurityOption1;
    option2?: LoggingEntriesWriteSecurityOption2;
    option3?: LoggingEntriesWriteSecurityOption3;
}
export declare class LoggingEntriesWriteRequest extends SpeakeasyBase {
    queryParams: LoggingEntriesWriteQueryParams;
    request?: shared.WriteLogEntriesRequestInput;
    security: LoggingEntriesWriteSecurity;
}
export declare class LoggingEntriesWriteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    writeLogEntriesResponse?: Map<string, any>;
}
