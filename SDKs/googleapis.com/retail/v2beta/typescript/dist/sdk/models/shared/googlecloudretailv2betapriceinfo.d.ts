import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaPriceInfoPriceRange } from "./googlecloudretailv2betapriceinfopricerange";
/**
 * The price information of a Product.
**/
export declare class GoogleCloudRetailV2betaPriceInfo extends SpeakeasyBase {
    cost?: number;
    currencyCode?: string;
    originalPrice?: number;
    price?: number;
    priceEffectiveTime?: string;
    priceExpireTime?: string;
    priceRange?: GoogleCloudRetailV2betaPriceInfoPriceRange;
}
