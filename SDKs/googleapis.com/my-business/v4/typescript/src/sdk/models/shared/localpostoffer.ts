import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LocalPostOffer
/** 
 * Specific fields for offer posts.
**/
export class LocalPostOffer extends SpeakeasyBase {
  @Metadata({ data: "json, name=couponCode" })
  couponCode?: string;

  @Metadata({ data: "json, name=redeemOnlineUrl" })
  redeemOnlineUrl?: string;

  @Metadata({ data: "json, name=termsConditions" })
  termsConditions?: string;
}
