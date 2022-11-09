import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ThreeContentTypeEnum {
    AudioL16RateEqual8000 = "audio/l16;rate=8000"
,    AudioL16RateEqual16000 = "audio/l16;rate=16000"
}


// ThreeHeaders
/** 
 * Details of the Websocket you want to connect to
**/
export class ThreeHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=customer_id" })
  customerId?: string;
}


// Three
/** 
 * Connect to a Websocket
**/
export class Three extends SpeakeasyBase {
  @Metadata({ data: "json, name=content-type" })
  contentType: ThreeContentTypeEnum;

  @Metadata({ data: "json, name=headers" })
  headers?: ThreeHeaders;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
