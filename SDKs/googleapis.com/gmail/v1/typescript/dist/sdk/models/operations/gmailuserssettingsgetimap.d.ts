import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsGetImapPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersSettingsGetImapQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsGetImapSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsGetImapSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsGetImapSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsGetImapSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsGetImapSecurity extends SpeakeasyBase {
    option1?: GmailUsersSettingsGetImapSecurityOption1;
    option2?: GmailUsersSettingsGetImapSecurityOption2;
    option3?: GmailUsersSettingsGetImapSecurityOption3;
    option4?: GmailUsersSettingsGetImapSecurityOption4;
}
export declare class GmailUsersSettingsGetImapRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsGetImapPathParams;
    queryParams: GmailUsersSettingsGetImapQueryParams;
    security: GmailUsersSettingsGetImapSecurity;
}
export declare class GmailUsersSettingsGetImapResponse extends SpeakeasyBase {
    contentType: string;
    imapSettings?: shared.ImapSettings;
    statusCode: number;
}
