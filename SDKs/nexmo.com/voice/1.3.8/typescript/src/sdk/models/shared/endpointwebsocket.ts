import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EndpointWebsocketContentTypeEnum {
    AudioL16RateEqual8000 = "audio/l16;rate=8000"
,    AudioL16RateEqual16000 = "audio/l16;rate=16000"
}


// EndpointWebsocketHeaders
/** 
 * Details of the Websocket you want to connect to
**/
export class EndpointWebsocketHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=customer_id" })
  customerId?: string;
}


// EndpointWebsocket
/** 
 * Connect to a Websocket
**/
export class EndpointWebsocket extends SpeakeasyBase {
  @Metadata({ data: "json, name=content-type" })
  contentType: EndpointWebsocketContentTypeEnum;

  @Metadata({ data: "json, name=headers" })
  headers?: EndpointWebsocketHeaders;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
