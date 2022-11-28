import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1PurchasableSku } from "./googlecloudchannelv1purchasablesku";



// GoogleCloudChannelV1ListPurchasableSkusResponse
/** 
 * Response message for ListPurchasableSkus.
**/
export class GoogleCloudChannelV1ListPurchasableSkusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=purchasableSkus", elemType: GoogleCloudChannelV1PurchasableSku })
  purchasableSkus?: GoogleCloudChannelV1PurchasableSku[];
}
