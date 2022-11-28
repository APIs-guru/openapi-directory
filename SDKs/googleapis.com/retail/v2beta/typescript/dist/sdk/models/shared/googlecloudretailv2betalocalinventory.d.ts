import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaCustomAttribute } from "./googlecloudretailv2betacustomattribute";
import { GoogleCloudRetailV2betaPriceInfo } from "./googlecloudretailv2betapriceinfo";
/**
 * The inventory information at a place (e.g. a store) identified by a place ID.
**/
export declare class GoogleCloudRetailV2betaLocalInventory extends SpeakeasyBase {
    attributes?: Map<string, GoogleCloudRetailV2betaCustomAttribute>;
    fulfillmentTypes?: string[];
    placeId?: string;
    priceInfo?: GoogleCloudRetailV2betaPriceInfo;
}
