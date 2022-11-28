import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum XxePayloadLocationEnum {
    LocationUnspecified = "LOCATION_UNSPECIFIED",
    CompleteRequestBody = "COMPLETE_REQUEST_BODY"
}


// Xxe
/** 
 * Information reported for an XXE.
**/
export class Xxe extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payloadLocation" })
  payloadLocation?: XxePayloadLocationEnum;

  @SpeakeasyMetadata({ data: "json, name=payloadValue" })
  payloadValue?: string;
}
