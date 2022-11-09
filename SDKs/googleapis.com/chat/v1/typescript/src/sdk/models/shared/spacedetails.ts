import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SpaceDetails
/** 
 * Details about the space including description and rules.
**/
export class SpaceDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=guidelines" })
  guidelines?: string;
}
