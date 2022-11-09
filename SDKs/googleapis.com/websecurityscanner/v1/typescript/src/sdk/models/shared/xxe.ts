import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum XxePayloadLocationEnum {
    LocationUnspecified = "LOCATION_UNSPECIFIED"
,    CompleteRequestBody = "COMPLETE_REQUEST_BODY"
}


// Xxe
/** 
 * Information reported for an XXE.
**/
export class Xxe extends SpeakeasyBase {
  @Metadata({ data: "json, name=payloadLocation" })
  payloadLocation?: XxePayloadLocationEnum;

  @Metadata({ data: "json, name=payloadValue" })
  payloadValue?: string;
}
