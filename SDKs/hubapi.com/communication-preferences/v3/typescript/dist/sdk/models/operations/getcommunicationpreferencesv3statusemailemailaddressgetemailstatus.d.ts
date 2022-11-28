import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusPathParams extends SpeakeasyBase {
    emailAddress: string;
}
export declare class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity extends SpeakeasyBase {
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
    privateAppsLegacy1?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy1?: shared.SchemeOauth2Legacy;
}
export declare class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusRequest extends SpeakeasyBase {
    pathParams: GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusPathParams;
    security: GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity;
}
export declare class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    publicSubscriptionStatusesResponse?: shared.PublicSubscriptionStatusesResponse;
    statusCode: number;
}
