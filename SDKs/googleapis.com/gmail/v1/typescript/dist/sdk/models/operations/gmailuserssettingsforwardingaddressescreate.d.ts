import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsForwardingAddressesCreatePathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersSettingsForwardingAddressesCreateQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsForwardingAddressesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsForwardingAddressesCreateRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsForwardingAddressesCreatePathParams;
    queryParams: GmailUsersSettingsForwardingAddressesCreateQueryParams;
    request?: shared.ForwardingAddress;
    security: GmailUsersSettingsForwardingAddressesCreateSecurity;
}
export declare class GmailUsersSettingsForwardingAddressesCreateResponse extends SpeakeasyBase {
    contentType: string;
    forwardingAddress?: shared.ForwardingAddress;
    statusCode: number;
}
