import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsSendAsSmimeInfoInsertPathParams extends SpeakeasyBase {
    sendAsEmail: string;
    userId: string;
}
export declare class GmailUsersSettingsSendAsSmimeInfoInsertQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsSendAsSmimeInfoInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsSmimeInfoInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsSmimeInfoInsertSecurity extends SpeakeasyBase {
    option1?: GmailUsersSettingsSendAsSmimeInfoInsertSecurityOption1;
    option2?: GmailUsersSettingsSendAsSmimeInfoInsertSecurityOption2;
}
export declare class GmailUsersSettingsSendAsSmimeInfoInsertRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsSendAsSmimeInfoInsertPathParams;
    queryParams: GmailUsersSettingsSendAsSmimeInfoInsertQueryParams;
    request?: shared.SmimeInfo;
    security: GmailUsersSettingsSendAsSmimeInfoInsertSecurity;
}
export declare class GmailUsersSettingsSendAsSmimeInfoInsertResponse extends SpeakeasyBase {
    contentType: string;
    smimeInfo?: shared.SmimeInfo;
    statusCode: number;
}
