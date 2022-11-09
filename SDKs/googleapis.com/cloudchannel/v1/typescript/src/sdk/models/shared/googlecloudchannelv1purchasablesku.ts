import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudChannelV1Sku } from "./googlecloudchannelv1sku";


// GoogleCloudChannelV1PurchasableSku
/** 
 * SKU that you can purchase. This is used in ListPurchasableSku API response.
**/
export class GoogleCloudChannelV1PurchasableSku extends SpeakeasyBase {
  @Metadata({ data: "json, name=sku" })
  sku?: GoogleCloudChannelV1Sku;
}
