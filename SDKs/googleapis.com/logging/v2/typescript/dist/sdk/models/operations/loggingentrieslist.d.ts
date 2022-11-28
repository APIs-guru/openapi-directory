import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LoggingEntriesListQueryParams extends SpeakeasyBase {
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
export declare class LoggingEntriesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingEntriesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingEntriesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingEntriesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingEntriesListSecurity extends SpeakeasyBase {
    option1?: LoggingEntriesListSecurityOption1;
    option2?: LoggingEntriesListSecurityOption2;
    option3?: LoggingEntriesListSecurityOption3;
    option4?: LoggingEntriesListSecurityOption4;
}
export declare class LoggingEntriesListRequest extends SpeakeasyBase {
    queryParams: LoggingEntriesListQueryParams;
    request?: shared.ListLogEntriesRequest;
    security: LoggingEntriesListSecurity;
}
export declare class LoggingEntriesListResponse extends SpeakeasyBase {
    contentType: string;
    listLogEntriesResponse?: shared.ListLogEntriesResponse;
    statusCode: number;
}
