import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EndpointPhoneTo
/** 
 * Connect to a Phone (PSTN) number
**/
export class EndpointPhoneTo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dtmfAnswer" })
  dtmfAnswer?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
