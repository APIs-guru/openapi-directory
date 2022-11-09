import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum MessagesWebhooksEndpointTypeEnum {
    InboundUrl = "inbound_url"
,    StatusUrl = "status_url"
}

export enum MessagesWebhooksHttpMethodEnum {
    Get = "GET"
,    Post = "POST"
}


export class MessagesWebhooks extends SpeakeasyBase {
  @Metadata({ data: "json, name=endpoint" })
  endpoint: string;

  @Metadata({ data: "json, name=endpoint_type" })
  endpointType: MessagesWebhooksEndpointTypeEnum;

  @Metadata({ data: "json, name=http_method" })
  httpMethod: MessagesWebhooksHttpMethodEnum;
}


// Messages
/** 
 * The Nexmo product that you access with this application.
**/
export class Messages extends SpeakeasyBase {
  @Metadata({ data: "json, name=webhooks", elemType: shared.MessagesWebhooks })
  webhooks?: MessagesWebhooks[];
}
