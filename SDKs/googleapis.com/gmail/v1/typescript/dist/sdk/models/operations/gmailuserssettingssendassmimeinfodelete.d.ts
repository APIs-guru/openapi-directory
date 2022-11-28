import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsSendAsSmimeInfoDeletePathParams extends SpeakeasyBase {
    id: string;
    sendAsEmail: string;
    userId: string;
}
export declare class GmailUsersSettingsSendAsSmimeInfoDeleteQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsSendAsSmimeInfoDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsSmimeInfoDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsSendAsSmimeInfoDeleteSecurity extends SpeakeasyBase {
    option1?: GmailUsersSettingsSendAsSmimeInfoDeleteSecurityOption1;
    option2?: GmailUsersSettingsSendAsSmimeInfoDeleteSecurityOption2;
}
export declare class GmailUsersSettingsSendAsSmimeInfoDeleteRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsSendAsSmimeInfoDeletePathParams;
    queryParams: GmailUsersSettingsSendAsSmimeInfoDeleteQueryParams;
    security: GmailUsersSettingsSendAsSmimeInfoDeleteSecurity;
}
export declare class GmailUsersSettingsSendAsSmimeInfoDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
