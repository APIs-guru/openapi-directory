import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooksInboundUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=http_method" })
  httpMethod?: string;
}


export class UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooksStatusUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=http_method" })
  httpMethod?: string;
}


export class UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inbound_url" })
  inboundUrl?: UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooksInboundUrl;

  @SpeakeasyMetadata({ data: "json, name=status_url" })
  statusUrl?: UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooksStatusUrl;
}


// UpdateApplication200ApplicationJsonCapabilitiesMessages
/** 
 * Messages / Dispatch related configuration
**/
export class UpdateApplication200ApplicationJsonCapabilitiesMessages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webhooks" })
  webhooks?: UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooks;
}


export class UpdateApplication200ApplicationJsonCapabilitiesRtcWebhooksEventUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=http_method" })
  httpMethod?: string;
}


export class UpdateApplication200ApplicationJsonCapabilitiesRtcWebhooks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event_url" })
  eventUrl?: UpdateApplication200ApplicationJsonCapabilitiesRtcWebhooksEventUrl;
}


// UpdateApplication200ApplicationJsonCapabilitiesRtc
/** 
 * RTC / Conversation Service related configuration
**/
export class UpdateApplication200ApplicationJsonCapabilitiesRtc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webhooks" })
  webhooks?: UpdateApplication200ApplicationJsonCapabilitiesRtcWebhooks;
}


export class UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=connection_timeout" })
  connectionTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=http_method" })
  httpMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=socket_timeout" })
  socketTimeout?: number;
}


export class UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksEventUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=connection_timeout" })
  connectionTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=http_method" })
  httpMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=socket_timeout" })
  socketTimeout?: number;
}


export class UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=connection_timeout" })
  connectionTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=http_method" })
  httpMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=socket_timeout" })
  socketTimeout?: number;
}


export class UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answer_url" })
  answerUrl?: UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl;

  @SpeakeasyMetadata({ data: "json, name=event_url" })
  eventUrl?: UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksEventUrl;

  @SpeakeasyMetadata({ data: "json, name=fallback_answer_url" })
  fallbackAnswerUrl?: UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl;
}


// UpdateApplication200ApplicationJsonCapabilitiesVoice
/** 
 * Voice related configuration
**/
export class UpdateApplication200ApplicationJsonCapabilitiesVoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webhooks" })
  webhooks?: UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooks;
}


// UpdateApplication200ApplicationJsonCapabilities
/** 
 * Configuration for the products available in this application
**/
export class UpdateApplication200ApplicationJsonCapabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messages" })
  messages?: UpdateApplication200ApplicationJsonCapabilitiesMessages;

  @SpeakeasyMetadata({ data: "json, name=rtc" })
  rtc?: UpdateApplication200ApplicationJsonCapabilitiesRtc;

  @SpeakeasyMetadata({ data: "json, name=vbc" })
  vbc?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=voice" })
  voice?: UpdateApplication200ApplicationJsonCapabilitiesVoice;
}


export class UpdateApplication200ApplicationJsonKeys extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=private_key" })
  privateKey?: string;

  @SpeakeasyMetadata({ data: "json, name=public_key" })
  publicKey?: string;
}


// UpdateApplication200ApplicationJsonPrivacy
/** 
 * Application privacy config
**/
export class UpdateApplication200ApplicationJsonPrivacy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=improve_ai" })
  improveAi?: boolean;
}


export class UpdateApplication200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capabilities" })
  capabilities?: UpdateApplication200ApplicationJsonCapabilities;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=keys" })
  keys?: UpdateApplication200ApplicationJsonKeys;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: UpdateApplication200ApplicationJsonPrivacy;
}


export class UpdateApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateApplicationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class UpdateApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateApplication200ApplicationJsonObject?: UpdateApplication200ApplicationJson;

  @SpeakeasyMetadata()
  updateApplication400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updateApplication401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updateApplication404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updateApplication405ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updateApplication406ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updateApplication415ApplicationJsonAny?: any;
}
