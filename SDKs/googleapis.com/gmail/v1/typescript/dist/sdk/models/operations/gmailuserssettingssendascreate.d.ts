import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsSendAsCreatePathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersSettingsSendAsCreateQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsSendAsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsCreateRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsSendAsCreatePathParams;
    queryParams: GmailUsersSettingsSendAsCreateQueryParams;
    request?: shared.SendAs;
    security: GmailUsersSettingsSendAsCreateSecurity;
}
export declare class GmailUsersSettingsSendAsCreateResponse extends SpeakeasyBase {
    contentType: string;
    sendAs?: shared.SendAs;
    statusCode: number;
}
