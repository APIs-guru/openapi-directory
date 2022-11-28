import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsGetAutoForwardingPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersSettingsGetAutoForwardingQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsGetAutoForwardingSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsGetAutoForwardingSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsGetAutoForwardingSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsGetAutoForwardingSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsGetAutoForwardingSecurity extends SpeakeasyBase {
    option1?: GmailUsersSettingsGetAutoForwardingSecurityOption1;
    option2?: GmailUsersSettingsGetAutoForwardingSecurityOption2;
    option3?: GmailUsersSettingsGetAutoForwardingSecurityOption3;
    option4?: GmailUsersSettingsGetAutoForwardingSecurityOption4;
}
export declare class GmailUsersSettingsGetAutoForwardingRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsGetAutoForwardingPathParams;
    queryParams: GmailUsersSettingsGetAutoForwardingQueryParams;
    security: GmailUsersSettingsGetAutoForwardingSecurity;
}
export declare class GmailUsersSettingsGetAutoForwardingResponse extends SpeakeasyBase {
    autoForwarding?: shared.AutoForwarding;
    contentType: string;
    statusCode: number;
}
