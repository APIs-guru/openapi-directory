import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Review } from "./review";



// LocationReview
/** 
 * Represents a review with location information.
**/
export class LocationReview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=review" })
  review?: Review;
}
