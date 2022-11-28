import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EndpointWebsocketContentTypeEnum {
    AudioL16RateEqual8000 = "audio/l16;rate=8000",
    AudioL16RateEqual16000 = "audio/l16;rate=16000"
}


// EndpointWebsocketHeaders
/** 
 * Details of the Websocket you want to connect to
**/
export class EndpointWebsocketHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customer_id" })
  customerId?: string;
}


// EndpointWebsocket
/** 
 * Connect to a Websocket
**/
export class EndpointWebsocket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content-type" })
  contentType: EndpointWebsocketContentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers?: EndpointWebsocketHeaders;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
