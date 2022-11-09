import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostEventsV3SendSecurityOption1 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class PostEventsV3SendSecurityOption2 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class PostEventsV3SendSecurity extends SpeakeasyBase {
    option1?: PostEventsV3SendSecurityOption1;
    option2?: PostEventsV3SendSecurityOption2;
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
