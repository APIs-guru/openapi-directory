import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Sku } from "./googlecloudchannelv1sku";



// GoogleCloudChannelV1PurchasableSku
/** 
 * SKU that you can purchase. This is used in ListPurchasableSku API response.
**/
export class GoogleCloudChannelV1PurchasableSku extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: GoogleCloudChannelV1Sku;
}
