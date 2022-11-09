import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateApplicationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateApplicationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateApplicationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooksInboundUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=http_method" })
  httpMethod?: string;
}


export class UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooksStatusUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=http_method" })
  httpMethod?: string;
}


export class UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooks extends SpeakeasyBase {
  @Metadata({ data: "json, name=inbound_url" })
  inboundUrl?: UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooksInboundUrl;

  @Metadata({ data: "json, name=status_url" })
  statusUrl?: UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooksStatusUrl;
}


// UpdateApplication200ApplicationJsonCapabilitiesMessages
/** 
 * Messages / Dispatch related configuration
**/
export class UpdateApplication200ApplicationJsonCapabilitiesMessages extends SpeakeasyBase {
  @Metadata({ data: "json, name=webhooks" })
  webhooks?: UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooks;
}


export class UpdateApplication200ApplicationJsonCapabilitiesRtcWebhooksEventUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=http_method" })
  httpMethod?: string;
}


export class UpdateApplication200ApplicationJsonCapabilitiesRtcWebhooks extends SpeakeasyBase {
  @Metadata({ data: "json, name=event_url" })
  eventUrl?: UpdateApplication200ApplicationJsonCapabilitiesRtcWebhooksEventUrl;
}


// UpdateApplication200ApplicationJsonCapabilitiesRtc
/** 
 * RTC / Conversation Service related configuration
**/
export class UpdateApplication200ApplicationJsonCapabilitiesRtc extends SpeakeasyBase {
  @Metadata({ data: "json, name=webhooks" })
  webhooks?: UpdateApplication200ApplicationJsonCapabilitiesRtcWebhooks;
}


export class UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=connection_timeout" })
  connectionTimeout?: number;

  @Metadata({ data: "json, name=http_method" })
  httpMethod?: string;

  @Metadata({ data: "json, name=socket_timeout" })
  socketTimeout?: number;
}


export class UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksEventUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=connection_timeout" })
  connectionTimeout?: number;

  @Metadata({ data: "json, name=http_method" })
  httpMethod?: string;

  @Metadata({ data: "json, name=socket_timeout" })
  socketTimeout?: number;
}


export class UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=connection_timeout" })
  connectionTimeout?: number;

  @Metadata({ data: "json, name=http_method" })
  httpMethod?: string;

  @Metadata({ data: "json, name=socket_timeout" })
  socketTimeout?: number;
}


export class UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooks extends SpeakeasyBase {
  @Metadata({ data: "json, name=answer_url" })
  answerUrl?: UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl;

  @Metadata({ data: "json, name=event_url" })
  eventUrl?: UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksEventUrl;

  @Metadata({ data: "json, name=fallback_answer_url" })
  fallbackAnswerUrl?: UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl;
}


// UpdateApplication200ApplicationJsonCapabilitiesVoice
/** 
 * Voice related configuration
**/
export class UpdateApplication200ApplicationJsonCapabilitiesVoice extends SpeakeasyBase {
  @Metadata({ data: "json, name=webhooks" })
  webhooks?: UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooks;
}


// UpdateApplication200ApplicationJsonCapabilities
/** 
 * Configuration for the products available in this application
**/
export class UpdateApplication200ApplicationJsonCapabilities extends SpeakeasyBase {
  @Metadata({ data: "json, name=messages" })
  messages?: UpdateApplication200ApplicationJsonCapabilitiesMessages;

  @Metadata({ data: "json, name=rtc" })
  rtc?: UpdateApplication200ApplicationJsonCapabilitiesRtc;

  @Metadata({ data: "json, name=vbc" })
  vbc?: Map<string, any>;

  @Metadata({ data: "json, name=voice" })
  voice?: UpdateApplication200ApplicationJsonCapabilitiesVoice;
}


export class UpdateApplication200ApplicationJsonKeys extends SpeakeasyBase {
  @Metadata({ data: "json, name=private_key" })
  privateKey?: string;

  @Metadata({ data: "json, name=public_key" })
  publicKey?: string;
}


// UpdateApplication200ApplicationJsonPrivacy
/** 
 * Application privacy config
**/
export class UpdateApplication200ApplicationJsonPrivacy extends SpeakeasyBase {
  @Metadata({ data: "json, name=improve_ai" })
  improveAi?: boolean;
}


export class UpdateApplication200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=capabilities" })
  capabilities?: UpdateApplication200ApplicationJsonCapabilities;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=keys" })
  keys?: UpdateApplication200ApplicationJsonKeys;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=privacy" })
  privacy?: UpdateApplication200ApplicationJsonPrivacy;
}


export class UpdateApplicationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateApplication200ApplicationJsonObject?: UpdateApplication200ApplicationJson;

  @Metadata()
  updateApplication400ApplicationJsonAny?: any;

  @Metadata()
  updateApplication401ApplicationJsonAny?: any;

  @Metadata()
  updateApplication404ApplicationJsonAny?: any;

  @Metadata()
  updateApplication405ApplicationJsonAny?: any;

  @Metadata()
  updateApplication406ApplicationJsonAny?: any;

  @Metadata()
  updateApplication415ApplicationJsonAny?: any;
}
