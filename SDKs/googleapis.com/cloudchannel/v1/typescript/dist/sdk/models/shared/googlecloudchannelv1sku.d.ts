import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1MarketingInfo } from "./googlecloudchannelv1marketinginfo";
import { GoogleCloudChannelV1Product } from "./googlecloudchannelv1product";
/**
 * Represents a product's purchasable Stock Keeping Unit (SKU). SKUs represent the different variations of the product. For example, Google Workspace Business Standard and Google Workspace Business Plus are Google Workspace product SKUs.
**/
export declare class GoogleCloudChannelV1Sku extends SpeakeasyBase {
    marketingInfo?: GoogleCloudChannelV1MarketingInfo;
    name?: string;
    product?: GoogleCloudChannelV1Product;
}
