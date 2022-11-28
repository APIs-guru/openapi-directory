import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsSendAsGetPathParams extends SpeakeasyBase {
    sendAsEmail: string;
    userId: string;
}
export declare class GmailUsersSettingsSendAsGetQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsSendAsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsGetSecurity extends SpeakeasyBase {
    option1?: GmailUsersSettingsSendAsGetSecurityOption1;
    option2?: GmailUsersSettingsSendAsGetSecurityOption2;
    option3?: GmailUsersSettingsSendAsGetSecurityOption3;
    option4?: GmailUsersSettingsSendAsGetSecurityOption4;
}
export declare class GmailUsersSettingsSendAsGetRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsSendAsGetPathParams;
    queryParams: GmailUsersSettingsSendAsGetQueryParams;
    security: GmailUsersSettingsSendAsGetSecurity;
}
export declare class GmailUsersSettingsSendAsGetResponse extends SpeakeasyBase {
    contentType: string;
    sendAs?: shared.SendAs;
    statusCode: number;
}
