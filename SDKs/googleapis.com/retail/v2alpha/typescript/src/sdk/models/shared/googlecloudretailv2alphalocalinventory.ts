import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaCustomAttribute } from "./googlecloudretailv2alphacustomattribute";
import { GoogleCloudRetailV2alphaPriceInfo } from "./googlecloudretailv2alphapriceinfo";



// GoogleCloudRetailV2alphaLocalInventory
/** 
 * The inventory information at a place (e.g. a store) identified by a place ID.
**/
export class GoogleCloudRetailV2alphaLocalInventory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2alphaCustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2alphaCustomAttribute>;

  @SpeakeasyMetadata({ data: "json, name=fulfillmentTypes" })
  fulfillmentTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=placeId" })
  placeId?: string;

  @SpeakeasyMetadata({ data: "json, name=priceInfo" })
  priceInfo?: GoogleCloudRetailV2alphaPriceInfo;
}
