import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsDelegatesListPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersSettingsDelegatesListQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsDelegatesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsDelegatesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsDelegatesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsDelegatesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsDelegatesListSecurity extends SpeakeasyBase {
    option1?: GmailUsersSettingsDelegatesListSecurityOption1;
    option2?: GmailUsersSettingsDelegatesListSecurityOption2;
    option3?: GmailUsersSettingsDelegatesListSecurityOption3;
    option4?: GmailUsersSettingsDelegatesListSecurityOption4;
}
export declare class GmailUsersSettingsDelegatesListRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsDelegatesListPathParams;
    queryParams: GmailUsersSettingsDelegatesListQueryParams;
    security: GmailUsersSettingsDelegatesListSecurity;
}
export declare class GmailUsersSettingsDelegatesListResponse extends SpeakeasyBase {
    contentType: string;
    listDelegatesResponse?: shared.ListDelegatesResponse;
    statusCode: number;
}
