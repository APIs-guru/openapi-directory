import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsSendAsPatchPathParams extends SpeakeasyBase {
    sendAsEmail: string;
    userId: string;
}
export declare class GmailUsersSettingsSendAsPatchQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsSendAsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsPatchSecurity extends SpeakeasyBase {
    option1?: GmailUsersSettingsSendAsPatchSecurityOption1;
    option2?: GmailUsersSettingsSendAsPatchSecurityOption2;
}
export declare class GmailUsersSettingsSendAsPatchRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsSendAsPatchPathParams;
    queryParams: GmailUsersSettingsSendAsPatchQueryParams;
    request?: shared.SendAs;
    security: GmailUsersSettingsSendAsPatchSecurity;
}
export declare class GmailUsersSettingsSendAsPatchResponse extends SpeakeasyBase {
    contentType: string;
    sendAs?: shared.SendAs;
    statusCode: number;
}
