import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MessagesWebhooksEndpointTypeEnum {
    InboundUrl = "inbound_url",
    StatusUrl = "status_url"
}

export enum MessagesWebhooksHttpMethodEnum {
    Get = "GET",
    Post = "POST"
}


export class MessagesWebhooks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint: string;

  @SpeakeasyMetadata({ data: "json, name=endpoint_type" })
  endpointType: MessagesWebhooksEndpointTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=http_method" })
  httpMethod: MessagesWebhooksHttpMethodEnum;
}


// Messages
/** 
 * The Nexmo product that you access with this application.
**/
export class Messages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webhooks", elemType: MessagesWebhooks })
  webhooks?: MessagesWebhooks[];
}
