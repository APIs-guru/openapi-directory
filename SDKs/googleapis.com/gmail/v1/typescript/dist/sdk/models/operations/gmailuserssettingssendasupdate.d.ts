import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsSendAsUpdatePathParams extends SpeakeasyBase {
    sendAsEmail: string;
    userId: string;
}
export declare class GmailUsersSettingsSendAsUpdateQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsSendAsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsUpdateSecurity extends SpeakeasyBase {
    option1?: GmailUsersSettingsSendAsUpdateSecurityOption1;
    option2?: GmailUsersSettingsSendAsUpdateSecurityOption2;
}
export declare class GmailUsersSettingsSendAsUpdateRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsSendAsUpdatePathParams;
    queryParams: GmailUsersSettingsSendAsUpdateQueryParams;
    request?: shared.SendAs;
    security: GmailUsersSettingsSendAsUpdateSecurity;
}
export declare class GmailUsersSettingsSendAsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    sendAs?: shared.SendAs;
    statusCode: number;
}
