import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Zero } from "./zero";
import { Two } from "./two";
import { Three } from "./three";
import { Four } from "./four";
import { ChannelTypeEnum } from "./channeltypeenum";



// ChannelFrom1
/** 
 * Connect to an App User
**/
export class ChannelFrom1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: string;
}


// ChannelFrom2
/** 
 * Connect to a Phone (PSTN) number
**/
export class ChannelFrom2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=number" })
  number: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


// ChannelFrom3
/** 
 * Connect to a SIP Endpoint
**/
export class ChannelFrom3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}

export enum ChannelFrom4ContentTypeEnum {
    AudioL16RateEqual8000 = "audio/l16;rate=8000",
    AudioL16RateEqual16000 = "audio/l16;rate=16000"
}


// ChannelFrom4Headers
/** 
 * Details of the Websocket you want to connect to
**/
export class ChannelFrom4Headers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customer_id" })
  customerId?: string;
}


// ChannelFrom4
/** 
 * Connect to a Websocket
**/
export class ChannelFrom4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content-type" })
  contentType: ChannelFrom4ContentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers?: ChannelFrom4Headers;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


// ChannelFrom5
/** 
 * Connect to a VBC extension
**/
export class ChannelFrom5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension" })
  extension: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


// ChannelTo2
/** 
 * Connect to a Phone (PSTN) number
**/
export class ChannelTo2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dtmfAnswer" })
  dtmfAnswer?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


// Channel
/** 
 * A user who joins a conversation as a member can have one channel per membership type. Channels can be `app`, `phone`, `sip`, `websocket`, or `vbc`
**/
export class Channel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: any;

  @SpeakeasyMetadata({ data: "json, name=leg_id" })
  legId?: string;

  @SpeakeasyMetadata({ data: "json, name=leg_ids" })
  legIds?: any[];

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: any;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ChannelTypeEnum;
}
