import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum MessagesWebhooksEndpointTypeEnum {
    InboundUrl = "inbound_url",
    StatusUrl = "status_url"
}
export declare enum MessagesWebhooksHttpMethodEnum {
    Get = "GET",
    Post = "POST"
}
export declare class MessagesWebhooks extends SpeakeasyBase {
    endpoint: string;
    endpointType: MessagesWebhooksEndpointTypeEnum;
    httpMethod: MessagesWebhooksHttpMethodEnum;
}
/**
 * The Nexmo product that you access with this application.
**/
export declare class Messages extends SpeakeasyBase {
    webhooks?: MessagesWebhooks[];
}
