import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostEventsV3SendSecurity extends SpeakeasyBase {
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
}
export declare class PostEventsV3SendRequest extends SpeakeasyBase {
    request: shared.BehavioralEventHttpCompletionRequest;
    security: PostEventsV3SendSecurity;
}
export declare class PostEventsV3SendResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
