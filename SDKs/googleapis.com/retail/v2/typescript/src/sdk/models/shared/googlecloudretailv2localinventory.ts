import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2CustomAttribute } from "./googlecloudretailv2customattribute";
import { GoogleCloudRetailV2PriceInfo } from "./googlecloudretailv2priceinfo";


// GoogleCloudRetailV2LocalInventory
/** 
 * The inventory information at a place (e.g. a store) identified by a place ID.
**/
export class GoogleCloudRetailV2LocalInventory extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes", elemType: shared.GoogleCloudRetailV2CustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2CustomAttribute>;

  @Metadata({ data: "json, name=fulfillmentTypes" })
  fulfillmentTypes?: string[];

  @Metadata({ data: "json, name=placeId" })
  placeId?: string;

  @Metadata({ data: "json, name=priceInfo" })
  priceInfo?: GoogleCloudRetailV2PriceInfo;
}
