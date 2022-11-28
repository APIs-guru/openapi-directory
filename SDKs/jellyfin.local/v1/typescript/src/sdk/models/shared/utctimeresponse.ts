import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UtcTimeResponse
/** 
 * Class UtcTimeResponse.
**/
export class UtcTimeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RequestReceptionTime" })
  requestReceptionTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ResponseTransmissionTime" })
  responseTransmissionTime?: Date;
}
