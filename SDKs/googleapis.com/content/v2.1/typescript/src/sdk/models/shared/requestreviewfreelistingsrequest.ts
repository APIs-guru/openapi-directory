import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RequestReviewFreeListingsRequest
/** 
 * Request message for the RequestReviewFreeListings Program method.
**/
export class RequestReviewFreeListingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
