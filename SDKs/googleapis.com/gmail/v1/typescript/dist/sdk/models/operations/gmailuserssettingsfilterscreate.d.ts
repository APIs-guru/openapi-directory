import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsFiltersCreatePathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersSettingsFiltersCreateQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsFiltersCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsFiltersCreateRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsFiltersCreatePathParams;
    queryParams: GmailUsersSettingsFiltersCreateQueryParams;
    request?: shared.Filter;
    security: GmailUsersSettingsFiltersCreateSecurity;
}
export declare class GmailUsersSettingsFiltersCreateResponse extends SpeakeasyBase {
    contentType: string;
    filter?: shared.Filter;
    statusCode: number;
}
