import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VoiceWebhooksEndpointTypeEnum {
    AnswerUrl = "answer_url",
    EventUrl = "event_url"
}

export enum VoiceWebhooksHttpMethodEnum {
    Get = "GET",
    Post = "POST"
}


export class VoiceWebhooks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint: string;

  @SpeakeasyMetadata({ data: "json, name=endpoint_type" })
  endpointType: VoiceWebhooksEndpointTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=http_method" })
  httpMethod: VoiceWebhooksHttpMethodEnum;
}


// Voice
/** 
 * The Nexmo product that you access with this application.
**/
export class Voice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webhooks", elemType: VoiceWebhooks })
  webhooks?: VoiceWebhooks[];
}
