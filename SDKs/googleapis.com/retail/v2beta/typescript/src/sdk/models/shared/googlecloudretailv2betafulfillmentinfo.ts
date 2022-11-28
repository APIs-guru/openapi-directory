import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2betaFulfillmentInfo
/** 
 * Fulfillment information, such as the store IDs for in-store pickup or region IDs for different shipping methods.
**/
export class GoogleCloudRetailV2betaFulfillmentInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=placeIds" })
  placeIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
