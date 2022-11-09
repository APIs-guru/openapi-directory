import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2alphaCustomAttribute } from "./googlecloudretailv2alphacustomattribute";
import { GoogleCloudRetailV2alphaPriceInfo } from "./googlecloudretailv2alphapriceinfo";


// GoogleCloudRetailV2alphaLocalInventory
/** 
 * The inventory information at a place (e.g. a store) identified by a place ID.
**/
export class GoogleCloudRetailV2alphaLocalInventory extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes", elemType: shared.GoogleCloudRetailV2alphaCustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2alphaCustomAttribute>;

  @Metadata({ data: "json, name=fulfillmentTypes" })
  fulfillmentTypes?: string[];

  @Metadata({ data: "json, name=placeId" })
  placeId?: string;

  @Metadata({ data: "json, name=priceInfo" })
  priceInfo?: GoogleCloudRetailV2alphaPriceInfo;
}
