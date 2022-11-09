import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EndpointPhoneFrom
/** 
 * Connect to a Phone (PSTN) number
**/
export class EndpointPhoneFrom extends SpeakeasyBase {
  @Metadata({ data: "json, name=number" })
  number: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
