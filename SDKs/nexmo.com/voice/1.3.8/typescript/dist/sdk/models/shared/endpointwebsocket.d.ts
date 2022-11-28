import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EndpointWebsocketContentTypeEnum {
    AudioL16RateEqual8000 = "audio/l16;rate=8000",
    AudioL16RateEqual16000 = "audio/l16;rate=16000"
}
/**
 * Details of the Websocket you want to connect to
**/
export declare class EndpointWebsocketHeaders extends SpeakeasyBase {
    customerId?: string;
}
/**
 * Connect to a Websocket
**/
export declare class EndpointWebsocket extends SpeakeasyBase {
    contentType: EndpointWebsocketContentTypeEnum;
    headers?: EndpointWebsocketHeaders;
    type: string;
    uri?: string;
}
