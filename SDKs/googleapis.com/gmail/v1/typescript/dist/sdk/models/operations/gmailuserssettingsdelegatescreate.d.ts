import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsDelegatesCreatePathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersSettingsDelegatesCreateQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsDelegatesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsDelegatesCreateRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsDelegatesCreatePathParams;
    queryParams: GmailUsersSettingsDelegatesCreateQueryParams;
    request?: shared.Delegate;
    security: GmailUsersSettingsDelegatesCreateSecurity;
}
export declare class GmailUsersSettingsDelegatesCreateResponse extends SpeakeasyBase {
    contentType: string;
    delegate?: shared.Delegate;
    statusCode: number;
}
