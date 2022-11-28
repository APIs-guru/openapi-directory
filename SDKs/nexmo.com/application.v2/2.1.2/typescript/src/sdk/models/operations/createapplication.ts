import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooksInboundUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=http_method" })
  httpMethod?: string;
}


export class CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooksStatusUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=http_method" })
  httpMethod?: string;
}


export class CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inbound_url" })
  inboundUrl?: CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooksInboundUrl;

  @SpeakeasyMetadata({ data: "json, name=status_url" })
  statusUrl?: CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooksStatusUrl;
}


// CreateApplication201ApplicationJsonCapabilitiesMessages
/** 
 * Messages / Dispatch related configuration
**/
export class CreateApplication201ApplicationJsonCapabilitiesMessages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webhooks" })
  webhooks?: CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooks;
}


export class CreateApplication201ApplicationJsonCapabilitiesRtcWebhooksEventUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=http_method" })
  httpMethod?: string;
}


export class CreateApplication201ApplicationJsonCapabilitiesRtcWebhooks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event_url" })
  eventUrl?: CreateApplication201ApplicationJsonCapabilitiesRtcWebhooksEventUrl;
}


// CreateApplication201ApplicationJsonCapabilitiesRtc
/** 
 * RTC / Conversation Service related configuration
**/
export class CreateApplication201ApplicationJsonCapabilitiesRtc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webhooks" })
  webhooks?: CreateApplication201ApplicationJsonCapabilitiesRtcWebhooks;
}


export class CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=connection_timeout" })
  connectionTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=http_method" })
  httpMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=socket_timeout" })
  socketTimeout?: number;
}


export class CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksEventUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=connection_timeout" })
  connectionTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=http_method" })
  httpMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=socket_timeout" })
  socketTimeout?: number;
}


export class CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=connection_timeout" })
  connectionTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=http_method" })
  httpMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=socket_timeout" })
  socketTimeout?: number;
}


export class CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answer_url" })
  answerUrl?: CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl;

  @SpeakeasyMetadata({ data: "json, name=event_url" })
  eventUrl?: CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksEventUrl;

  @SpeakeasyMetadata({ data: "json, name=fallback_answer_url" })
  fallbackAnswerUrl?: CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl;
}


// CreateApplication201ApplicationJsonCapabilitiesVoice
/** 
 * Voice related configuration
**/
export class CreateApplication201ApplicationJsonCapabilitiesVoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webhooks" })
  webhooks?: CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooks;
}


// CreateApplication201ApplicationJsonCapabilities
/** 
 * Configuration for the products available in this application
**/
export class CreateApplication201ApplicationJsonCapabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messages" })
  messages?: CreateApplication201ApplicationJsonCapabilitiesMessages;

  @SpeakeasyMetadata({ data: "json, name=rtc" })
  rtc?: CreateApplication201ApplicationJsonCapabilitiesRtc;

  @SpeakeasyMetadata({ data: "json, name=vbc" })
  vbc?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=voice" })
  voice?: CreateApplication201ApplicationJsonCapabilitiesVoice;
}


export class CreateApplication201ApplicationJsonKeys extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=private_key" })
  privateKey?: string;

  @SpeakeasyMetadata({ data: "json, name=public_key" })
  publicKey?: string;
}


// CreateApplication201ApplicationJsonPrivacy
/** 
 * Application privacy config
**/
export class CreateApplication201ApplicationJsonPrivacy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=improve_ai" })
  improveAi?: boolean;
}


export class CreateApplication201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capabilities" })
  capabilities?: CreateApplication201ApplicationJsonCapabilities;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=keys" })
  keys?: CreateApplication201ApplicationJsonKeys;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: CreateApplication201ApplicationJsonPrivacy;
}


export class CreateApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class CreateApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createApplication201ApplicationJsonObject?: CreateApplication201ApplicationJson;

  @SpeakeasyMetadata()
  createApplication400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createApplication401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createApplication405ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createApplication406ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  createApplication415ApplicationJsonAny?: any;
}
