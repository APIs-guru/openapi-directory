import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsSendAsVerifyPathParams extends SpeakeasyBase {
    sendAsEmail: string;
    userId: string;
}
export declare class GmailUsersSettingsSendAsVerifyQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsSendAsVerifySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsVerifyRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsSendAsVerifyPathParams;
    queryParams: GmailUsersSettingsSendAsVerifyQueryParams;
    security: GmailUsersSettingsSendAsVerifySecurity;
}
export declare class GmailUsersSettingsSendAsVerifyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
