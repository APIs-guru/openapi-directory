import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudChannelV1PurchasableOffer } from "./googlecloudchannelv1purchasableoffer";


// GoogleCloudChannelV1ListPurchasableOffersResponse
/** 
 * Response message for ListPurchasableOffers.
**/
export class GoogleCloudChannelV1ListPurchasableOffersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=purchasableOffers", elemType: shared.GoogleCloudChannelV1PurchasableOffer })
  purchasableOffers?: GoogleCloudChannelV1PurchasableOffer[];
}
