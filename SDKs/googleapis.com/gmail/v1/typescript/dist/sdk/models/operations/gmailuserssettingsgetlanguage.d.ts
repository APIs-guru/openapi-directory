import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsGetLanguagePathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersSettingsGetLanguageQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsGetLanguageSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsGetLanguageSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsGetLanguageSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsGetLanguageSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsGetLanguageSecurity extends SpeakeasyBase {
    option1?: GmailUsersSettingsGetLanguageSecurityOption1;
    option2?: GmailUsersSettingsGetLanguageSecurityOption2;
    option3?: GmailUsersSettingsGetLanguageSecurityOption3;
    option4?: GmailUsersSettingsGetLanguageSecurityOption4;
}
export declare class GmailUsersSettingsGetLanguageRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsGetLanguagePathParams;
    queryParams: GmailUsersSettingsGetLanguageQueryParams;
    security: GmailUsersSettingsGetLanguageSecurity;
}
export declare class GmailUsersSettingsGetLanguageResponse extends SpeakeasyBase {
    contentType: string;
    languageSettings?: shared.LanguageSettings;
    statusCode: number;
}
