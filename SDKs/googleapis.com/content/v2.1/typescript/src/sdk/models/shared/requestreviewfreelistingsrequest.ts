import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RequestReviewFreeListingsRequest
/** 
 * Request message for the RequestReviewFreeListings Program method.
**/
export class RequestReviewFreeListingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
