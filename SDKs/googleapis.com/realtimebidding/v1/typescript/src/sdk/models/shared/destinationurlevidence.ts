import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinationUrlEvidence
/** 
 * The full landing page URL of the destination.
**/
export class DestinationUrlEvidence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationUrl" })
  destinationUrl?: string;
}
