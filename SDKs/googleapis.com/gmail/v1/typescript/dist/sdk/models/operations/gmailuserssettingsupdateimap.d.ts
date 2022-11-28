import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsUpdateImapPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersSettingsUpdateImapQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsUpdateImapSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsUpdateImapRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsUpdateImapPathParams;
    queryParams: GmailUsersSettingsUpdateImapQueryParams;
    request?: shared.ImapSettings;
    security: GmailUsersSettingsUpdateImapSecurity;
}
export declare class GmailUsersSettingsUpdateImapResponse extends SpeakeasyBase {
    contentType: string;
    imapSettings?: shared.ImapSettings;
    statusCode: number;
}
