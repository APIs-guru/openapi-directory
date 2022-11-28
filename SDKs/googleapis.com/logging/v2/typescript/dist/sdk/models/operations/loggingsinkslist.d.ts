import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LoggingSinksListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class LoggingSinksListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class LoggingSinksListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingSinksListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingSinksListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingSinksListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LoggingSinksListSecurity extends SpeakeasyBase {
    option1?: LoggingSinksListSecurityOption1;
    option2?: LoggingSinksListSecurityOption2;
    option3?: LoggingSinksListSecurityOption3;
    option4?: LoggingSinksListSecurityOption4;
}
export declare class LoggingSinksListRequest extends SpeakeasyBase {
    pathParams: LoggingSinksListPathParams;
    queryParams: LoggingSinksListQueryParams;
    security: LoggingSinksListSecurity;
}
export declare class LoggingSinksListResponse extends SpeakeasyBase {
    contentType: string;
    listSinksResponse?: shared.ListSinksResponse;
    statusCode: number;
}
