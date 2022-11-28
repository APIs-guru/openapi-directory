import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersWatchPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersWatchQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersWatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersWatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersWatchSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersWatchSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersWatchSecurity extends SpeakeasyBase {
    option1?: GmailUsersWatchSecurityOption1;
    option2?: GmailUsersWatchSecurityOption2;
    option3?: GmailUsersWatchSecurityOption3;
    option4?: GmailUsersWatchSecurityOption4;
}
export declare class GmailUsersWatchRequest extends SpeakeasyBase {
    pathParams: GmailUsersWatchPathParams;
    queryParams: GmailUsersWatchQueryParams;
    request?: shared.WatchRequest;
    security: GmailUsersWatchSecurity;
}
export declare class GmailUsersWatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    watchResponse?: shared.WatchResponse;
}
