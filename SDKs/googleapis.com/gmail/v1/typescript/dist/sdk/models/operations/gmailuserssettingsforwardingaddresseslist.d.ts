import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GmailUsersSettingsForwardingAddressesListPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GmailUsersSettingsForwardingAddressesListQueryParams extends SpeakeasyBase {
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
export declare class GmailUsersSettingsForwardingAddressesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsForwardingAddressesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsForwardingAddressesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsForwardingAddressesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GmailUsersSettingsForwardingAddressesListSecurity extends SpeakeasyBase {
    option1?: GmailUsersSettingsForwardingAddressesListSecurityOption1;
    option2?: GmailUsersSettingsForwardingAddressesListSecurityOption2;
    option3?: GmailUsersSettingsForwardingAddressesListSecurityOption3;
    option4?: GmailUsersSettingsForwardingAddressesListSecurityOption4;
}
export declare class GmailUsersSettingsForwardingAddressesListRequest extends SpeakeasyBase {
    pathParams: GmailUsersSettingsForwardingAddressesListPathParams;
    queryParams: GmailUsersSettingsForwardingAddressesListQueryParams;
    security: GmailUsersSettingsForwardingAddressesListSecurity;
}
export declare class GmailUsersSettingsForwardingAddressesListResponse extends SpeakeasyBase {
    contentType: string;
    listForwardingAddressesResponse?: shared.ListForwardingAddressesResponse;
    statusCode: number;
}
