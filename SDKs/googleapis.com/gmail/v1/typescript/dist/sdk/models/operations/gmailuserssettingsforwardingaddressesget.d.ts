import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsForwardingAddressesGetPathParams extends SpeakeasyBase {
    forwardingEmail: string;
    userId: string;
}
export declare class GmailUsersSettingsForwardingAddressesGetQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsForwardingAddressesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsForwardingAddressesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsForwardingAddressesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsForwardingAddressesGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsForwardingAddressesGetSecurity extends SpeakeasyBase {
    option1?: GmailUsersSettingsForwardingAddressesGetSecurityOption1;
    option2?: GmailUsersSettingsForwardingAddressesGetSecurityOption2;
    option3?: GmailUsersSettingsForwardingAddressesGetSecurityOption3;
    option4?: GmailUsersSettingsForwardingAddressesGetSecurityOption4;
}
export declare class GmailUsersSettingsForwardingAddressesGetRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsForwardingAddressesGetPathParams;
    queryParams: GmailUsersSettingsForwardingAddressesGetQueryParams;
    security: GmailUsersSettingsForwardingAddressesGetSecurity;
}
export declare class GmailUsersSettingsForwardingAddressesGetResponse extends SpeakeasyBase {
    contentType: string;
    forwardingAddress?: shared.ForwardingAddress;
    statusCode: number;
}
