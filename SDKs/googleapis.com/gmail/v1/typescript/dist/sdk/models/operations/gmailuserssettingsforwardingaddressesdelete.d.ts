import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsForwardingAddressesDeletePathParams extends SpeakeasyBase {
    forwardingEmail: string;
    userId: string;
}
export declare class GmailUsersSettingsForwardingAddressesDeleteQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsForwardingAddressesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsForwardingAddressesDeleteRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsForwardingAddressesDeletePathParams;
    queryParams: GmailUsersSettingsForwardingAddressesDeleteQueryParams;
    security: GmailUsersSettingsForwardingAddressesDeleteSecurity;
}
export declare class GmailUsersSettingsForwardingAddressesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
