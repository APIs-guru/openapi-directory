import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsDelegatesDeletePathParams extends SpeakeasyBase {
    delegateEmail: string;
    userId: string;
}
export declare class GmailUsersSettingsDelegatesDeleteQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsDelegatesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsDelegatesDeleteRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsDelegatesDeletePathParams;
    queryParams: GmailUsersSettingsDelegatesDeleteQueryParams;
    security: GmailUsersSettingsDelegatesDeleteSecurity;
}
export declare class GmailUsersSettingsDelegatesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
