import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsUpdateVacationPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersSettingsUpdateVacationQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsUpdateVacationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsUpdateVacationRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsUpdateVacationPathParams;
    queryParams: GmailUsersSettingsUpdateVacationQueryParams;
    request?: shared.VacationSettings;
    security: GmailUsersSettingsUpdateVacationSecurity;
}
export declare class GmailUsersSettingsUpdateVacationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    vacationSettings?: shared.VacationSettings;
}
