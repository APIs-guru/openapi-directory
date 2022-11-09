import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Duplicate } from "./duplicate";


// Metadata
/** 
 * Additional non-user-editable information about the location.
**/
export class Metadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=duplicate" })
  duplicate?: Duplicate;

  @Metadata({ data: "json, name=mapsUrl" })
  mapsUrl?: string;

  @Metadata({ data: "json, name=newReviewUrl" })
  newReviewUrl?: string;
}
