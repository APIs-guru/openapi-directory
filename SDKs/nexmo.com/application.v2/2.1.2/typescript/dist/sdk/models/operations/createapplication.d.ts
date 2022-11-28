import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooksInboundUrl extends SpeakeasyBase {
    address?: string;
    httpMethod?: string;
}
export declare class CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooksStatusUrl extends SpeakeasyBase {
    address?: string;
    httpMethod?: string;
}
export declare class CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooks extends SpeakeasyBase {
    inboundUrl?: CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooksInboundUrl;
    statusUrl?: CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooksStatusUrl;
}
/**
 * Messages / Dispatch related configuration
**/
export declare class CreateApplication201ApplicationJsonCapabilitiesMessages extends SpeakeasyBase {
    webhooks?: CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooks;
}
export declare class CreateApplication201ApplicationJsonCapabilitiesRtcWebhooksEventUrl extends SpeakeasyBase {
    address?: string;
    httpMethod?: string;
}
export declare class CreateApplication201ApplicationJsonCapabilitiesRtcWebhooks extends SpeakeasyBase {
    eventUrl?: CreateApplication201ApplicationJsonCapabilitiesRtcWebhooksEventUrl;
}
/**
 * RTC / Conversation Service related configuration
**/
export declare class CreateApplication201ApplicationJsonCapabilitiesRtc extends SpeakeasyBase {
    webhooks?: CreateApplication201ApplicationJsonCapabilitiesRtcWebhooks;
}
export declare class CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl extends SpeakeasyBase {
    address?: string;
    connectionTimeout?: number;
    httpMethod?: string;
    socketTimeout?: number;
}
export declare class CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksEventUrl extends SpeakeasyBase {
    address?: string;
    connectionTimeout?: number;
    httpMethod?: string;
    socketTimeout?: number;
}
export declare class CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl extends SpeakeasyBase {
    address?: string;
    connectionTimeout?: number;
    httpMethod?: string;
    socketTimeout?: number;
}
export declare class CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooks extends SpeakeasyBase {
    answerUrl?: CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl;
    eventUrl?: CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksEventUrl;
    fallbackAnswerUrl?: CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl;
}
/**
 * Voice related configuration
**/
export declare class CreateApplication201ApplicationJsonCapabilitiesVoice extends SpeakeasyBase {
    webhooks?: CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooks;
}
/**
 * Configuration for the products available in this application
**/
export declare class CreateApplication201ApplicationJsonCapabilities extends SpeakeasyBase {
    messages?: CreateApplication201ApplicationJsonCapabilitiesMessages;
    rtc?: CreateApplication201ApplicationJsonCapabilitiesRtc;
    vbc?: Map<string, any>;
    voice?: CreateApplication201ApplicationJsonCapabilitiesVoice;
}
export declare class CreateApplication201ApplicationJsonKeys extends SpeakeasyBase {
    privateKey?: string;
    publicKey?: string;
}
/**
 * Application privacy config
**/
export declare class CreateApplication201ApplicationJsonPrivacy extends SpeakeasyBase {
    improveAi?: boolean;
}
export declare class CreateApplication201ApplicationJson extends SpeakeasyBase {
    capabilities?: CreateApplication201ApplicationJsonCapabilities;
    id?: string;
    keys?: CreateApplication201ApplicationJsonKeys;
    name?: string;
    privacy?: CreateApplication201ApplicationJsonPrivacy;
}
export declare class CreateApplicationRequest extends SpeakeasyBase {
    request: any;
}
export declare class CreateApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createApplication201ApplicationJsonObject?: CreateApplication201ApplicationJson;
    createApplication400ApplicationJsonAny?: any;
    createApplication401ApplicationJsonAny?: any;
    createApplication405ApplicationJsonAny?: any;
    createApplication406ApplicationJsonAny?: any;
    createApplication415ApplicationJsonAny?: any;
}
