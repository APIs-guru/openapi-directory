import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LocalPostOffer
/** 
 * Specific fields for offer posts.
**/
export class LocalPostOffer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=couponCode" })
  couponCode?: string;

  @SpeakeasyMetadata({ data: "json, name=redeemOnlineUrl" })
  redeemOnlineUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=termsConditions" })
  termsConditions?: string;
}
