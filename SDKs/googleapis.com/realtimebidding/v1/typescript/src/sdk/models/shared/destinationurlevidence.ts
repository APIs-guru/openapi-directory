import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DestinationUrlEvidence
/** 
 * The full landing page URL of the destination.
**/
export class DestinationUrlEvidence extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationUrl" })
  destinationUrl?: string;
}
