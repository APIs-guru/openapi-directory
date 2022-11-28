import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RequestReviewShoppingAdsRequest
/** 
 * Request message for the RequestReviewShoppingAds program method.
**/
export class RequestReviewShoppingAdsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
