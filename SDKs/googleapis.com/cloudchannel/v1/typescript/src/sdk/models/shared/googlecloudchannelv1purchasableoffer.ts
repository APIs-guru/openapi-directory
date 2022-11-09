import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudChannelV1Offer } from "./googlecloudchannelv1offer";


// GoogleCloudChannelV1PurchasableOffer
/** 
 * Offer that you can purchase for a customer. This is used in the ListPurchasableOffer API response.
**/
export class GoogleCloudChannelV1PurchasableOffer extends SpeakeasyBase {
  @Metadata({ data: "json, name=offer" })
  offer?: GoogleCloudChannelV1Offer;
}
