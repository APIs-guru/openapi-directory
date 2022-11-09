import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Review } from "./review";


// LocationReview
/** 
 * Represents a review with location information.
**/
export class LocationReview extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=review" })
  review?: Review;
}
