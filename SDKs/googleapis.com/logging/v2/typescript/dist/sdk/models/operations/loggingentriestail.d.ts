import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LoggingEntriesTailQueryParams extends SpeakeasyBase {
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
export declare class LoggingEntriesTailSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingEntriesTailSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingEntriesTailSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingEntriesTailSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingEntriesTailSecurity extends SpeakeasyBase {
    option1?: LoggingEntriesTailSecurityOption1;
    option2?: LoggingEntriesTailSecurityOption2;
    option3?: LoggingEntriesTailSecurityOption3;
    option4?: LoggingEntriesTailSecurityOption4;
}
export declare class LoggingEntriesTailRequest extends SpeakeasyBase {
    queryParams: LoggingEntriesTailQueryParams;
    request?: shared.TailLogEntriesRequest;
    security: LoggingEntriesTailSecurity;
}
export declare class LoggingEntriesTailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tailLogEntriesResponse?: shared.TailLogEntriesResponse;
}
