import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsDelegatesGetPathParams extends SpeakeasyBase {
    delegateEmail: string;
    userId: string;
}
export declare class GmailUsersSettingsDelegatesGetQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsDelegatesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsDelegatesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsDelegatesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsDelegatesGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsDelegatesGetSecurity extends SpeakeasyBase {
    option1?: GmailUsersSettingsDelegatesGetSecurityOption1;
    option2?: GmailUsersSettingsDelegatesGetSecurityOption2;
    option3?: GmailUsersSettingsDelegatesGetSecurityOption3;
    option4?: GmailUsersSettingsDelegatesGetSecurityOption4;
}
export declare class GmailUsersSettingsDelegatesGetRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsDelegatesGetPathParams;
    queryParams: GmailUsersSettingsDelegatesGetQueryParams;
    security: GmailUsersSettingsDelegatesGetSecurity;
}
export declare class GmailUsersSettingsDelegatesGetResponse extends SpeakeasyBase {
    contentType: string;
    delegate?: shared.Delegate;
    statusCode: number;
}
