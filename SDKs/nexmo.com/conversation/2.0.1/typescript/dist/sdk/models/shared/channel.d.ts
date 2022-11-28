import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelTypeEnum } from "./channeltypeenum";
/**
 * Connect to an App User
**/
export declare class ChannelFrom1 extends SpeakeasyBase {
    type: string;
    user: string;
}
/**
 * Connect to a Phone (PSTN) number
**/
export declare class ChannelFrom2 extends SpeakeasyBase {
    number: string;
    type: string;
}
/**
 * Connect to a SIP Endpoint
**/
export declare class ChannelFrom3 extends SpeakeasyBase {
    type: string;
    uri?: string;
}
export declare enum ChannelFrom4ContentTypeEnum {
    AudioL16RateEqual8000 = "audio/l16;rate=8000",
    AudioL16RateEqual16000 = "audio/l16;rate=16000"
}
/**
 * Details of the Websocket you want to connect to
**/
export declare class ChannelFrom4Headers extends SpeakeasyBase {
    customerId?: string;
}
/**
 * Connect to a Websocket
**/
export declare class ChannelFrom4 extends SpeakeasyBase {
    contentType: ChannelFrom4ContentTypeEnum;
    headers?: ChannelFrom4Headers;
    type: string;
    uri?: string;
}
/**
 * Connect to a VBC extension
**/
export declare class ChannelFrom5 extends SpeakeasyBase {
    extension: string;
    type: string;
}
/**
 * Connect to a Phone (PSTN) number
**/
export declare class ChannelTo2 extends SpeakeasyBase {
    dtmfAnswer?: string;
    number: string;
    type: string;
}
/**
 * A user who joins a conversation as a member can have one channel per membership type. Channels can be `app`, `phone`, `sip`, `websocket`, or `vbc`
**/
export declare class Channel extends SpeakeasyBase {
    from?: any;
    legId?: string;
    legIds?: any[];
    to?: any;
    type?: ChannelTypeEnum;
}
