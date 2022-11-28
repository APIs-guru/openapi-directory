import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity extends SpeakeasyBase {
    oauth2Legacy?: shared.SchemeOauth2Legacy;
    hapikey?: shared.SchemeHapikey;
    oauth2Legacy1?: shared.SchemeOauth2Legacy;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    privateAppsLegacy1?: shared.SchemePrivateAppsLegacy;
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
