import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCommunicationPreferencesV3SubscribeSubscribeSecurity extends SpeakeasyBase {
    oauth2Legacy?: shared.SchemeOauth2Legacy;
    hapikey?: shared.SchemeHapikey;
    oauth2Legacy1?: shared.SchemeOauth2Legacy;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    privateAppsLegacy1?: shared.SchemePrivateAppsLegacy;
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
