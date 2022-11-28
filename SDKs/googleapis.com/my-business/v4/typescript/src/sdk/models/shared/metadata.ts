import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Duplicate } from "./duplicate";



// Metadata
/** 
 * Additional non-user-editable information about the location.
**/
export class Metadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duplicate" })
  duplicate?: Duplicate;

  @SpeakeasyMetadata({ data: "json, name=mapsUrl" })
  mapsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=newReviewUrl" })
  newReviewUrl?: string;
}
