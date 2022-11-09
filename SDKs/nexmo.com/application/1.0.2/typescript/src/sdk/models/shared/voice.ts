import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum VoiceWebhooksEndpointTypeEnum {
    AnswerUrl = "answer_url"
,    EventUrl = "event_url"
}

export enum VoiceWebhooksHttpMethodEnum {
    Get = "GET"
,    Post = "POST"
}


export class VoiceWebhooks extends SpeakeasyBase {
  @Metadata({ data: "json, name=endpoint" })
  endpoint: string;

  @Metadata({ data: "json, name=endpoint_type" })
  endpointType: VoiceWebhooksEndpointTypeEnum;

  @Metadata({ data: "json, name=http_method" })
  httpMethod: VoiceWebhooksHttpMethodEnum;
}


// Voice
/** 
 * The Nexmo product that you access with this application.
**/
export class Voice extends SpeakeasyBase {
  @Metadata({ data: "json, name=webhooks", elemType: shared.VoiceWebhooks })
  webhooks?: VoiceWebhooks[];
}
