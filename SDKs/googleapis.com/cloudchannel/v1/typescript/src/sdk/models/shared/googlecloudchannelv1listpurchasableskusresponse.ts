import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudChannelV1PurchasableSku } from "./googlecloudchannelv1purchasablesku";


// GoogleCloudChannelV1ListPurchasableSkusResponse
/** 
 * Response message for ListPurchasableSkus.
**/
export class GoogleCloudChannelV1ListPurchasableSkusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=purchasableSkus", elemType: shared.GoogleCloudChannelV1PurchasableSku })
  purchasableSkus?: GoogleCloudChannelV1PurchasableSku[];
}
