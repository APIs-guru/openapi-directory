import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsUpdateAutoForwardingPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersSettingsUpdateAutoForwardingQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsUpdateAutoForwardingSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsUpdateAutoForwardingRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsUpdateAutoForwardingPathParams;
    queryParams: GmailUsersSettingsUpdateAutoForwardingQueryParams;
    request?: shared.AutoForwarding;
    security: GmailUsersSettingsUpdateAutoForwardingSecurity;
}
export declare class GmailUsersSettingsUpdateAutoForwardingResponse extends SpeakeasyBase {
    autoForwarding?: shared.AutoForwarding;
    contentType: string;
    statusCode: number;
}
