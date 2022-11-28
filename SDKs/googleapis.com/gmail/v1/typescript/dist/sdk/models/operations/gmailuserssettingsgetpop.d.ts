import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsGetPopPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersSettingsGetPopQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsGetPopSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsGetPopSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsGetPopSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsGetPopSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsGetPopSecurity extends SpeakeasyBase {
    option1?: GmailUsersSettingsGetPopSecurityOption1;
    option2?: GmailUsersSettingsGetPopSecurityOption2;
    option3?: GmailUsersSettingsGetPopSecurityOption3;
    option4?: GmailUsersSettingsGetPopSecurityOption4;
}
export declare class GmailUsersSettingsGetPopRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsGetPopPathParams;
    queryParams: GmailUsersSettingsGetPopQueryParams;
    security: GmailUsersSettingsGetPopSecurity;
}
export declare class GmailUsersSettingsGetPopResponse extends SpeakeasyBase {
    contentType: string;
    popSettings?: shared.PopSettings;
    statusCode: number;
}
