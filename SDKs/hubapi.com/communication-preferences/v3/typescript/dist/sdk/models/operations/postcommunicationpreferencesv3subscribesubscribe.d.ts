import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption1 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption2 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption3 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class PostCommunicationPreferencesV3SubscribeSubscribeSecurity extends SpeakeasyBase {
    option1?: PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption1;
    option2?: PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption2;
    option3?: PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption3;
}
export declare class PostCommunicationPreferencesV3SubscribeSubscribeRequest extends SpeakeasyBase {
    request: shared.PublicUpdateSubscriptionStatusRequest;
    security: PostCommunicationPreferencesV3SubscribeSubscribeSecurity;
}
export declare class PostCommunicationPreferencesV3SubscribeSubscribeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    publicSubscriptionStatus?: shared.PublicSubscriptionStatus;
    statusCode: number;
}
