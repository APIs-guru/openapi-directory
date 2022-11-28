import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2CustomAttribute } from "./googlecloudretailv2customattribute";
import { GoogleCloudRetailV2PriceInfo } from "./googlecloudretailv2priceinfo";



// GoogleCloudRetailV2LocalInventory
/** 
 * The inventory information at a place (e.g. a store) identified by a place ID.
**/
export class GoogleCloudRetailV2LocalInventory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2CustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2CustomAttribute>;

  @SpeakeasyMetadata({ data: "json, name=fulfillmentTypes" })
  fulfillmentTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=placeId" })
  placeId?: string;

  @SpeakeasyMetadata({ data: "json, name=priceInfo" })
  priceInfo?: GoogleCloudRetailV2PriceInfo;
}
