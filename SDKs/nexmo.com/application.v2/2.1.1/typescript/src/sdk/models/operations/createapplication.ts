import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateApplicationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooksInboundUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=http_method" })
  httpMethod?: string;
}


export class CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooksStatusUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=http_method" })
  httpMethod?: string;
}


export class CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooks extends SpeakeasyBase {
  @Metadata({ data: "json, name=inbound_url" })
  inboundUrl?: CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooksInboundUrl;

  @Metadata({ data: "json, name=status_url" })
  statusUrl?: CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooksStatusUrl;
}


// CreateApplication201ApplicationJsonCapabilitiesMessages
/** 
 * Messages / Dispatch related configuration
**/
export class CreateApplication201ApplicationJsonCapabilitiesMessages extends SpeakeasyBase {
  @Metadata({ data: "json, name=webhooks" })
  webhooks?: CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooks;
}


export class CreateApplication201ApplicationJsonCapabilitiesRtcWebhooksEventUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=http_method" })
  httpMethod?: string;
}


export class CreateApplication201ApplicationJsonCapabilitiesRtcWebhooks extends SpeakeasyBase {
  @Metadata({ data: "json, name=event_url" })
  eventUrl?: CreateApplication201ApplicationJsonCapabilitiesRtcWebhooksEventUrl;
}


// CreateApplication201ApplicationJsonCapabilitiesRtc
/** 
 * RTC / Conversation Service related configuration
**/
export class CreateApplication201ApplicationJsonCapabilitiesRtc extends SpeakeasyBase {
  @Metadata({ data: "json, name=webhooks" })
  webhooks?: CreateApplication201ApplicationJsonCapabilitiesRtcWebhooks;
}


export class CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=connection_timeout" })
  connectionTimeout?: number;

  @Metadata({ data: "json, name=http_method" })
  httpMethod?: string;

  @Metadata({ data: "json, name=socket_timeout" })
  socketTimeout?: number;
}


export class CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksEventUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=connection_timeout" })
  connectionTimeout?: number;

  @Metadata({ data: "json, name=http_method" })
  httpMethod?: string;

  @Metadata({ data: "json, name=socket_timeout" })
  socketTimeout?: number;
}


export class CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=connection_timeout" })
  connectionTimeout?: number;

  @Metadata({ data: "json, name=http_method" })
  httpMethod?: string;

  @Metadata({ data: "json, name=socket_timeout" })
  socketTimeout?: number;
}


export class CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooks extends SpeakeasyBase {
  @Metadata({ data: "json, name=answer_url" })
  answerUrl?: CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl;

  @Metadata({ data: "json, name=event_url" })
  eventUrl?: CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksEventUrl;

  @Metadata({ data: "json, name=fallback_answer_url" })
  fallbackAnswerUrl?: CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl;
}


// CreateApplication201ApplicationJsonCapabilitiesVoice
/** 
 * Voice related configuration
**/
export class CreateApplication201ApplicationJsonCapabilitiesVoice extends SpeakeasyBase {
  @Metadata({ data: "json, name=webhooks" })
  webhooks?: CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooks;
}


// CreateApplication201ApplicationJsonCapabilities
/** 
 * Configuration for the products available in this application
**/
export class CreateApplication201ApplicationJsonCapabilities extends SpeakeasyBase {
  @Metadata({ data: "json, name=messages" })
  messages?: CreateApplication201ApplicationJsonCapabilitiesMessages;

  @Metadata({ data: "json, name=rtc" })
  rtc?: CreateApplication201ApplicationJsonCapabilitiesRtc;

  @Metadata({ data: "json, name=vbc" })
  vbc?: Map<string, any>;

  @Metadata({ data: "json, name=voice" })
  voice?: CreateApplication201ApplicationJsonCapabilitiesVoice;
}


export class CreateApplication201ApplicationJsonKeys extends SpeakeasyBase {
  @Metadata({ data: "json, name=private_key" })
  privateKey?: string;

  @Metadata({ data: "json, name=public_key" })
  publicKey?: string;
}


// CreateApplication201ApplicationJsonPrivacy
/** 
 * Application privacy config
**/
export class CreateApplication201ApplicationJsonPrivacy extends SpeakeasyBase {
  @Metadata({ data: "json, name=improve_ai" })
  improveAi?: boolean;
}


export class CreateApplication201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=capabilities" })
  capabilities?: CreateApplication201ApplicationJsonCapabilities;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=keys" })
  keys?: CreateApplication201ApplicationJsonKeys;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=privacy" })
  privacy?: CreateApplication201ApplicationJsonPrivacy;
}


export class CreateApplicationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createApplication201ApplicationJsonObject?: CreateApplication201ApplicationJson;

  @Metadata()
  createApplication400ApplicationJsonAny?: any;

  @Metadata()
  createApplication401ApplicationJsonAny?: any;

  @Metadata()
  createApplication405ApplicationJsonAny?: any;

  @Metadata()
  createApplication406ApplicationJsonAny?: any;

  @Metadata()
  createApplication415ApplicationJsonAny?: any;
}
