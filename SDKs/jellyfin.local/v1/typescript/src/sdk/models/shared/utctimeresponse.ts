import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UtcTimeResponse
/** 
 * Class UtcTimeResponse.
**/
export class UtcTimeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RequestReceptionTime" })
  requestReceptionTime?: Date;

  @Metadata({ data: "json, name=ResponseTransmissionTime" })
  responseTransmissionTime?: Date;
}
