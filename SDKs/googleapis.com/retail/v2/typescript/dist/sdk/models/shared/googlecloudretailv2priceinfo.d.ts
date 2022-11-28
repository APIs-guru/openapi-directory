import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2PriceInfoPriceRange } from "./googlecloudretailv2priceinfopricerange";
/**
 * The price information of a Product.
**/
export declare class GoogleCloudRetailV2PriceInfo extends SpeakeasyBase {
    cost?: number;
    currencyCode?: string;
    originalPrice?: number;
    price?: number;
    priceEffectiveTime?: string;
    priceExpireTime?: string;
    priceRange?: GoogleCloudRetailV2PriceInfoPriceRange;
}
