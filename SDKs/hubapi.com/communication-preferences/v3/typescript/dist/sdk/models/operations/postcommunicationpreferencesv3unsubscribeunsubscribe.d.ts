import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurityOption1 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurityOption2 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurityOption3 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity extends SpeakeasyBase {
    option1?: PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurityOption1;
    option2?: PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurityOption2;
    option3?: PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurityOption3;
}
export declare class PostCommunicationPreferencesV3UnsubscribeUnsubscribeRequest extends SpeakeasyBase {
    request: shared.PublicUpdateSubscriptionStatusRequest;
    security: PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity;
}
export declare class PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    publicSubscriptionStatus?: shared.PublicSubscriptionStatus;
    statusCode: number;
}
