import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsFiltersDeletePathParams extends SpeakeasyBase {
    id: string;
    userId: string;
}
export declare class GmailUsersSettingsFiltersDeleteQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsFiltersDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsFiltersDeleteRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsFiltersDeletePathParams;
    queryParams: GmailUsersSettingsFiltersDeleteQueryParams;
    security: GmailUsersSettingsFiltersDeleteSecurity;
}
export declare class GmailUsersSettingsFiltersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
