import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsUpdatePopPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersSettingsUpdatePopQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsUpdatePopSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsUpdatePopRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsUpdatePopPathParams;
    queryParams: GmailUsersSettingsUpdatePopQueryParams;
    request?: shared.PopSettings;
    security: GmailUsersSettingsUpdatePopSecurity;
}
export declare class GmailUsersSettingsUpdatePopResponse extends SpeakeasyBase {
    contentType: string;
    popSettings?: shared.PopSettings;
    statusCode: number;
}
