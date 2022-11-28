import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsUpdateLanguagePathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersSettingsUpdateLanguageQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsUpdateLanguageSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsUpdateLanguageRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsUpdateLanguagePathParams;
    queryParams: GmailUsersSettingsUpdateLanguageQueryParams;
    request?: shared.LanguageSettings;
    security: GmailUsersSettingsUpdateLanguageSecurity;
}
export declare class GmailUsersSettingsUpdateLanguageResponse extends SpeakeasyBase {
    contentType: string;
    languageSettings?: shared.LanguageSettings;
    statusCode: number;
}
