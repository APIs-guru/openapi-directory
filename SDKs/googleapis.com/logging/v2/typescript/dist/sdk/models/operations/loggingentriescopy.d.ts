import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LoggingEntriesCopyQueryParams extends SpeakeasyBase {
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
export declare class LoggingEntriesCopySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingEntriesCopySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingEntriesCopySecurity extends SpeakeasyBase {
    option1?: LoggingEntriesCopySecurityOption1;
    option2?: LoggingEntriesCopySecurityOption2;
}
export declare class LoggingEntriesCopyRequest extends SpeakeasyBase {
    queryParams: LoggingEntriesCopyQueryParams;
    request?: shared.CopyLogEntriesRequest;
    security: LoggingEntriesCopySecurity;
}
export declare class LoggingEntriesCopyResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
