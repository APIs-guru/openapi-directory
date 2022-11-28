import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsFiltersListPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersSettingsFiltersListQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsFiltersListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsFiltersListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsFiltersListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsFiltersListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsFiltersListSecurity extends SpeakeasyBase {
    option1?: GmailUsersSettingsFiltersListSecurityOption1;
    option2?: GmailUsersSettingsFiltersListSecurityOption2;
    option3?: GmailUsersSettingsFiltersListSecurityOption3;
    option4?: GmailUsersSettingsFiltersListSecurityOption4;
}
export declare class GmailUsersSettingsFiltersListRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsFiltersListPathParams;
    queryParams: GmailUsersSettingsFiltersListQueryParams;
    security: GmailUsersSettingsFiltersListSecurity;
}
export declare class GmailUsersSettingsFiltersListResponse extends SpeakeasyBase {
    contentType: string;
    listFiltersResponse?: shared.ListFiltersResponse;
    statusCode: number;
}
