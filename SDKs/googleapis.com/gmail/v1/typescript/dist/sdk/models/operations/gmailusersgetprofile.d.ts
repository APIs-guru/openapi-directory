import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersGetProfilePathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersGetProfileQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersGetProfileSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersGetProfileSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersGetProfileSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersGetProfileSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersGetProfileSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersGetProfileSecurity extends SpeakeasyBase {
    option1?: GmailUsersGetProfileSecurityOption1;
    option2?: GmailUsersGetProfileSecurityOption2;
    option3?: GmailUsersGetProfileSecurityOption3;
    option4?: GmailUsersGetProfileSecurityOption4;
    option5?: GmailUsersGetProfileSecurityOption5;
}
export declare class GmailUsersGetProfileRequest extends SpeakeasyBase {
    pathParams: GmailUsersGetProfilePathParams;
    queryParams: GmailUsersGetProfileQueryParams;
    security: GmailUsersGetProfileSecurity;
}
export declare class GmailUsersGetProfileResponse extends SpeakeasyBase {
    contentType: string;
    profile?: shared.Profile;
    statusCode: number;
}
