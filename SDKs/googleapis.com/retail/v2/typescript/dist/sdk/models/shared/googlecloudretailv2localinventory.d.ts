import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2CustomAttribute } from "./googlecloudretailv2customattribute";
import { GoogleCloudRetailV2PriceInfo } from "./googlecloudretailv2priceinfo";
/**
 * The inventory information at a place (e.g. a store) identified by a place ID.
**/
export declare class GoogleCloudRetailV2LocalInventory extends SpeakeasyBase {
    attributes?: Map<string, GoogleCloudRetailV2CustomAttribute>;
    fulfillmentTypes?: string[];
    placeId?: string;
    priceInfo?: GoogleCloudRetailV2PriceInfo;
}
