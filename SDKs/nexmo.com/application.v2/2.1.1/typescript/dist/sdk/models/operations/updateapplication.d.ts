import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdateApplicationPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateApplicationRequest extends SpeakeasyBase {
    pathParams: UpdateApplicationPathParams;
    request: any;
}
export declare class UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooksInboundUrl extends SpeakeasyBase {
    address?: string;
    httpMethod?: string;
}
export declare class UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooksStatusUrl extends SpeakeasyBase {
    address?: string;
    httpMethod?: string;
}
export declare class UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooks extends SpeakeasyBase {
    inboundUrl?: UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooksInboundUrl;
    statusUrl?: UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooksStatusUrl;
}
/**
 * Messages / Dispatch related configuration
**/
export declare class UpdateApplication200ApplicationJsonCapabilitiesMessages extends SpeakeasyBase {
    webhooks?: UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooks;
}
export declare class UpdateApplication200ApplicationJsonCapabilitiesRtcWebhooksEventUrl extends SpeakeasyBase {
    address?: string;
    httpMethod?: string;
}
export declare class UpdateApplication200ApplicationJsonCapabilitiesRtcWebhooks extends SpeakeasyBase {
    eventUrl?: UpdateApplication200ApplicationJsonCapabilitiesRtcWebhooksEventUrl;
}
/**
 * RTC / Conversation Service related configuration
**/
export declare class UpdateApplication200ApplicationJsonCapabilitiesRtc extends SpeakeasyBase {
    webhooks?: UpdateApplication200ApplicationJsonCapabilitiesRtcWebhooks;
}
export declare class UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl extends SpeakeasyBase {
    address?: string;
    connectionTimeout?: number;
    httpMethod?: string;
    socketTimeout?: number;
}
export declare class UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksEventUrl extends SpeakeasyBase {
    address?: string;
    connectionTimeout?: number;
    httpMethod?: string;
    socketTimeout?: number;
}
export declare class UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl extends SpeakeasyBase {
    address?: string;
    connectionTimeout?: number;
    httpMethod?: string;
    socketTimeout?: number;
}
export declare class UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooks extends SpeakeasyBase {
    answerUrl?: UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl;
    eventUrl?: UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksEventUrl;
    fallbackAnswerUrl?: UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl;
}
/**
 * Voice related configuration
**/
export declare class UpdateApplication200ApplicationJsonCapabilitiesVoice extends SpeakeasyBase {
    webhooks?: UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooks;
}
/**
 * Configuration for the products available in this application
**/
export declare class UpdateApplication200ApplicationJsonCapabilities extends SpeakeasyBase {
    messages?: UpdateApplication200ApplicationJsonCapabilitiesMessages;
    rtc?: UpdateApplication200ApplicationJsonCapabilitiesRtc;
    vbc?: Map<string, any>;
    voice?: UpdateApplication200ApplicationJsonCapabilitiesVoice;
}
export declare class UpdateApplication200ApplicationJsonKeys extends SpeakeasyBase {
    privateKey?: string;
    publicKey?: string;
}
/**
 * Application privacy config
**/
export declare class UpdateApplication200ApplicationJsonPrivacy extends SpeakeasyBase {
    improveAi?: boolean;
}
export declare class UpdateApplication200ApplicationJson extends SpeakeasyBase {
    capabilities?: UpdateApplication200ApplicationJsonCapabilities;
    id?: string;
    keys?: UpdateApplication200ApplicationJsonKeys;
    name?: string;
    privacy?: UpdateApplication200ApplicationJsonPrivacy;
}
export declare class UpdateApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateApplication200ApplicationJsonObject?: UpdateApplication200ApplicationJson;
    updateApplication400ApplicationJsonAny?: any;
    updateApplication401ApplicationJsonAny?: any;
    updateApplication404ApplicationJsonAny?: any;
    updateApplication405ApplicationJsonAny?: any;
    updateApplication406ApplicationJsonAny?: any;
    updateApplication415ApplicationJsonAny?: any;
}
