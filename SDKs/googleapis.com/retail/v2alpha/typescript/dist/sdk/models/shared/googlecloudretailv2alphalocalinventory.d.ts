import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaCustomAttribute } from "./googlecloudretailv2alphacustomattribute";
import { GoogleCloudRetailV2alphaPriceInfo } from "./googlecloudretailv2alphapriceinfo";
/**
 * The inventory information at a place (e.g. a store) identified by a place ID.
**/
export declare class GoogleCloudRetailV2alphaLocalInventory extends SpeakeasyBase {
    attributes?: Map<string, GoogleCloudRetailV2alphaCustomAttribute>;
    fulfillmentTypes?: string[];
    placeId?: string;
    priceInfo?: GoogleCloudRetailV2alphaPriceInfo;
}
