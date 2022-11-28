import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EndpointPhoneFrom
/** 
 * Connect to a Phone (PSTN) number
**/
export class EndpointPhoneFrom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=number" })
  number: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
