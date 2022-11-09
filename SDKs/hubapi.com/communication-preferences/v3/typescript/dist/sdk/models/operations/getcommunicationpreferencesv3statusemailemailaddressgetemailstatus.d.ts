import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusPathParams extends SpeakeasyBase {
    emailAddress: string;
}
export declare class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption1 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption2 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption3 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity extends SpeakeasyBase {
    option1?: GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption1;
    option2?: GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption2;
    option3?: GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption3;
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
