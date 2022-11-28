import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsSendAsSmimeInfoGetPathParams extends SpeakeasyBase {
    id: string;
    sendAsEmail: string;
    userId: string;
}
export declare class GmailUsersSettingsSendAsSmimeInfoGetQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsSendAsSmimeInfoGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsSmimeInfoGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsSmimeInfoGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsSmimeInfoGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsSmimeInfoGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsSmimeInfoGetSecurity extends SpeakeasyBase {
    option1?: GmailUsersSettingsSendAsSmimeInfoGetSecurityOption1;
    option2?: GmailUsersSettingsSendAsSmimeInfoGetSecurityOption2;
    option3?: GmailUsersSettingsSendAsSmimeInfoGetSecurityOption3;
    option4?: GmailUsersSettingsSendAsSmimeInfoGetSecurityOption4;
    option5?: GmailUsersSettingsSendAsSmimeInfoGetSecurityOption5;
}
export declare class GmailUsersSettingsSendAsSmimeInfoGetRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsSendAsSmimeInfoGetPathParams;
    queryParams: GmailUsersSettingsSendAsSmimeInfoGetQueryParams;
    security: GmailUsersSettingsSendAsSmimeInfoGetSecurity;
}
export declare class GmailUsersSettingsSendAsSmimeInfoGetResponse extends SpeakeasyBase {
    contentType: string;
    smimeInfo?: shared.SmimeInfo;
    statusCode: number;
}
