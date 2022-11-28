import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VoiceWebhooksEndpointTypeEnum {
    AnswerUrl = "answer_url",
    EventUrl = "event_url"
}
export declare enum VoiceWebhooksHttpMethodEnum {
    Get = "GET",
    Post = "POST"
}
export declare class VoiceWebhooks extends SpeakeasyBase {
    endpoint: string;
    endpointType: VoiceWebhooksEndpointTypeEnum;
    httpMethod: VoiceWebhooksHttpMethodEnum;
}
/**
 * The Nexmo product that you access with this application.
**/
export declare class Voice extends SpeakeasyBase {
    webhooks?: VoiceWebhooks[];
}
