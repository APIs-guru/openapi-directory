import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaCustomAttribute } from "./googlecloudretailv2betacustomattribute";
import { GoogleCloudRetailV2betaPriceInfo } from "./googlecloudretailv2betapriceinfo";



// GoogleCloudRetailV2betaLocalInventory
/** 
 * The inventory information at a place (e.g. a store) identified by a place ID.
**/
export class GoogleCloudRetailV2betaLocalInventory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2betaCustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2betaCustomAttribute>;

  @SpeakeasyMetadata({ data: "json, name=fulfillmentTypes" })
  fulfillmentTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=placeId" })
  placeId?: string;

  @SpeakeasyMetadata({ data: "json, name=priceInfo" })
  priceInfo?: GoogleCloudRetailV2betaPriceInfo;
}
