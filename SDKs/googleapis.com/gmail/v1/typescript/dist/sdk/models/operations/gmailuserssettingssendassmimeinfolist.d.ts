import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsSendAsSmimeInfoListPathParams extends SpeakeasyBase {
    sendAsEmail: string;
    userId: string;
}
export declare class GmailUsersSettingsSendAsSmimeInfoListQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsSendAsSmimeInfoListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsSmimeInfoListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsSmimeInfoListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsSmimeInfoListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsSmimeInfoListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsSmimeInfoListSecurity extends SpeakeasyBase {
    option1?: GmailUsersSettingsSendAsSmimeInfoListSecurityOption1;
    option2?: GmailUsersSettingsSendAsSmimeInfoListSecurityOption2;
    option3?: GmailUsersSettingsSendAsSmimeInfoListSecurityOption3;
    option4?: GmailUsersSettingsSendAsSmimeInfoListSecurityOption4;
    option5?: GmailUsersSettingsSendAsSmimeInfoListSecurityOption5;
}
export declare class GmailUsersSettingsSendAsSmimeInfoListRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsSendAsSmimeInfoListPathParams;
    queryParams: GmailUsersSettingsSendAsSmimeInfoListQueryParams;
    security: GmailUsersSettingsSendAsSmimeInfoListSecurity;
}
export declare class GmailUsersSettingsSendAsSmimeInfoListResponse extends SpeakeasyBase {
    contentType: string;
    listSmimeInfoResponse?: shared.ListSmimeInfoResponse;
    statusCode: number;
}
