import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SpaceDetails
/** 
 * Details about the space including description and rules.
**/
export class SpaceDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=guidelines" })
  guidelines?: string;
}
