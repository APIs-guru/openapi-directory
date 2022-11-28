import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1PurchasableOffer } from "./googlecloudchannelv1purchasableoffer";



// GoogleCloudChannelV1ListPurchasableOffersResponse
/** 
 * Response message for ListPurchasableOffers.
**/
export class GoogleCloudChannelV1ListPurchasableOffersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=purchasableOffers", elemType: GoogleCloudChannelV1PurchasableOffer })
  purchasableOffers?: GoogleCloudChannelV1PurchasableOffer[];
}
