import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsSendAsListPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersSettingsSendAsListQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsSendAsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsListSecurity extends SpeakeasyBase {
    option1?: GmailUsersSettingsSendAsListSecurityOption1;
    option2?: GmailUsersSettingsSendAsListSecurityOption2;
    option3?: GmailUsersSettingsSendAsListSecurityOption3;
    option4?: GmailUsersSettingsSendAsListSecurityOption4;
}
export declare class GmailUsersSettingsSendAsListRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsSendAsListPathParams;
    queryParams: GmailUsersSettingsSendAsListQueryParams;
    security: GmailUsersSettingsSendAsListSecurity;
}
export declare class GmailUsersSettingsSendAsListResponse extends SpeakeasyBase {
    contentType: string;
    listSendAsResponse?: shared.ListSendAsResponse;
    statusCode: number;
}
