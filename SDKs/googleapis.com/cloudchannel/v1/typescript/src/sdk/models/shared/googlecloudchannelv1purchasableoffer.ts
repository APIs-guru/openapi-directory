import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Offer } from "./googlecloudchannelv1offer";



// GoogleCloudChannelV1PurchasableOffer
/** 
 * Offer that you can purchase for a customer. This is used in the ListPurchasableOffer API response.
**/
export class GoogleCloudChannelV1PurchasableOffer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offer" })
  offer?: GoogleCloudChannelV1Offer;
}
