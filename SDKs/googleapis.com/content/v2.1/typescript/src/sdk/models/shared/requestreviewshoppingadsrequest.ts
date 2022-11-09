import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RequestReviewShoppingAdsRequest
/** 
 * Request message for the RequestReviewShoppingAds program method.
**/
export class RequestReviewShoppingAdsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
