import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersStopPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersStopQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersStopSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersStopSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersStopSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersStopSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersStopSecurity extends SpeakeasyBase {
    option1?: GmailUsersStopSecurityOption1;
    option2?: GmailUsersStopSecurityOption2;
    option3?: GmailUsersStopSecurityOption3;
    option4?: GmailUsersStopSecurityOption4;
}
export declare class GmailUsersStopRequest extends SpeakeasyBase {
    pathParams: GmailUsersStopPathParams;
    queryParams: GmailUsersStopQueryParams;
    security: GmailUsersStopSecurity;
}
export declare class GmailUsersStopResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
