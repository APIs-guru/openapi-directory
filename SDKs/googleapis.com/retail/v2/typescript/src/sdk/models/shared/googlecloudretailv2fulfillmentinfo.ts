import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2FulfillmentInfo
/** 
 * Fulfillment information, such as the store IDs for in-store pickup or region IDs for different shipping methods.
**/
export class GoogleCloudRetailV2FulfillmentInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=placeIds" })
  placeIds?: string[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}
