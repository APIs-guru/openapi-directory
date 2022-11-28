import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsGetVacationPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersSettingsGetVacationQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsGetVacationSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsGetVacationSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsGetVacationSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsGetVacationSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsGetVacationSecurity extends SpeakeasyBase {
    option1?: GmailUsersSettingsGetVacationSecurityOption1;
    option2?: GmailUsersSettingsGetVacationSecurityOption2;
    option3?: GmailUsersSettingsGetVacationSecurityOption3;
    option4?: GmailUsersSettingsGetVacationSecurityOption4;
}
export declare class GmailUsersSettingsGetVacationRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsGetVacationPathParams;
    queryParams: GmailUsersSettingsGetVacationQueryParams;
    security: GmailUsersSettingsGetVacationSecurity;
}
export declare class GmailUsersSettingsGetVacationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    vacationSettings?: shared.VacationSettings;
}
