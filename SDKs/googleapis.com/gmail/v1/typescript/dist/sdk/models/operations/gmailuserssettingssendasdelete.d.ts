import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsSendAsDeletePathParams extends SpeakeasyBase {
    sendAsEmail: string;
    userId: string;
}
export declare class GmailUsersSettingsSendAsDeleteQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsSendAsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsDeleteRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsSendAsDeletePathParams;
    queryParams: GmailUsersSettingsSendAsDeleteQueryParams;
    security: GmailUsersSettingsSendAsDeleteSecurity;
}
export declare class GmailUsersSettingsSendAsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
