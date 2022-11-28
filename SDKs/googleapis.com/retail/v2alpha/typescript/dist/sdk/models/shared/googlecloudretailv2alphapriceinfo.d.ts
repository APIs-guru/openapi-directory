import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaPriceInfoPriceRange } from "./googlecloudretailv2alphapriceinfopricerange";
/**
 * The price information of a Product.
**/
export declare class GoogleCloudRetailV2alphaPriceInfo extends SpeakeasyBase {
    cost?: number;
    currencyCode?: string;
    originalPrice?: number;
    price?: number;
    priceEffectiveTime?: string;
    priceExpireTime?: string;
    priceRange?: GoogleCloudRetailV2alphaPriceInfoPriceRange;
}
