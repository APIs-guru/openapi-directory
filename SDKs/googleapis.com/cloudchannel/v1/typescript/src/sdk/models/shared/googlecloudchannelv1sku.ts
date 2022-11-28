import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1MarketingInfo } from "./googlecloudchannelv1marketinginfo";
import { GoogleCloudChannelV1Product } from "./googlecloudchannelv1product";



// GoogleCloudChannelV1Sku
/** 
 * Represents a product's purchasable Stock Keeping Unit (SKU). SKUs represent the different variations of the product. For example, Google Workspace Business Standard and Google Workspace Business Plus are Google Workspace product SKUs.
**/
export class GoogleCloudChannelV1Sku extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=marketingInfo" })
  marketingInfo?: GoogleCloudChannelV1MarketingInfo;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: GoogleCloudChannelV1Product;
}
