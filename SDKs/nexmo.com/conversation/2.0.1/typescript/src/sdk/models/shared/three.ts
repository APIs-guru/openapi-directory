import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ThreeContentTypeEnum {
    AudioL16RateEqual8000 = "audio/l16;rate=8000",
    AudioL16RateEqual16000 = "audio/l16;rate=16000"
}


// ThreeHeaders
/** 
 * Details of the Websocket you want to connect to
**/
export class ThreeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customer_id" })
  customerId?: string;
}


// Three
/** 
 * Connect to a Websocket
**/
export class Three extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content-type" })
  contentType: ThreeContentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers?: ThreeHeaders;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
