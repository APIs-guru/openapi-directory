import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2betaCustomAttribute } from "./googlecloudretailv2betacustomattribute";
import { GoogleCloudRetailV2betaPriceInfo } from "./googlecloudretailv2betapriceinfo";


// GoogleCloudRetailV2betaLocalInventory
/** 
 * The inventory information at a place (e.g. a store) identified by a place ID.
**/
export class GoogleCloudRetailV2betaLocalInventory extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes", elemType: shared.GoogleCloudRetailV2betaCustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2betaCustomAttribute>;

  @Metadata({ data: "json, name=fulfillmentTypes" })
  fulfillmentTypes?: string[];

  @Metadata({ data: "json, name=placeId" })
  placeId?: string;

  @Metadata({ data: "json, name=priceInfo" })
  priceInfo?: GoogleCloudRetailV2betaPriceInfo;
}
