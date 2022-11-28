import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsFiltersGetPathParams extends SpeakeasyBase {
    id: string;
    userId: string;
}
export declare class GmailUsersSettingsFiltersGetQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsFiltersGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsFiltersGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsFiltersGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsFiltersGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsFiltersGetSecurity extends SpeakeasyBase {
    option1?: GmailUsersSettingsFiltersGetSecurityOption1;
    option2?: GmailUsersSettingsFiltersGetSecurityOption2;
    option3?: GmailUsersSettingsFiltersGetSecurityOption3;
    option4?: GmailUsersSettingsFiltersGetSecurityOption4;
}
export declare class GmailUsersSettingsFiltersGetRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsFiltersGetPathParams;
    queryParams: GmailUsersSettingsFiltersGetQueryParams;
    security: GmailUsersSettingsFiltersGetSecurity;
}
export declare class GmailUsersSettingsFiltersGetResponse extends SpeakeasyBase {
    contentType: string;
    filter?: shared.Filter;
    statusCode: number;
}
