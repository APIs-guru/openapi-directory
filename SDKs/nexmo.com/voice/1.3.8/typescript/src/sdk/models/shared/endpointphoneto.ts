import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EndpointPhoneTo
/** 
 * Connect to a Phone (PSTN) number
**/
export class EndpointPhoneTo extends SpeakeasyBase {
  @Metadata({ data: "json, name=dtmfAnswer" })
  dtmfAnswer?: string;

  @Metadata({ data: "json, name=number" })
  number: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
