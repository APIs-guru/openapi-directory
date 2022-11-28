import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsSendAsSmimeInfoSetDefaultPathParams extends SpeakeasyBase {
    id: string;
    sendAsEmail: string;
    userId: string;
}
export declare class GmailUsersSettingsSendAsSmimeInfoSetDefaultQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsSendAsSmimeInfoSetDefaultSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsSmimeInfoSetDefaultSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsSmimeInfoSetDefaultSecurity extends SpeakeasyBase {
    option1?: GmailUsersSettingsSendAsSmimeInfoSetDefaultSecurityOption1;
    option2?: GmailUsersSettingsSendAsSmimeInfoSetDefaultSecurityOption2;
}
export declare class GmailUsersSettingsSendAsSmimeInfoSetDefaultRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsSendAsSmimeInfoSetDefaultPathParams;
    queryParams: GmailUsersSettingsSendAsSmimeInfoSetDefaultQueryParams;
    security: GmailUsersSettingsSendAsSmimeInfoSetDefaultSecurity;
}
export declare class GmailUsersSettingsSendAsSmimeInfoSetDefaultResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
