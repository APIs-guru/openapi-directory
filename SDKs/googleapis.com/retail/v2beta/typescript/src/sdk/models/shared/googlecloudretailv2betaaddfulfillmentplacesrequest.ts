import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2betaAddFulfillmentPlacesRequest
/** 
 * Request message for ProductService.AddFulfillmentPlaces method.
**/
export class GoogleCloudRetailV2betaAddFulfillmentPlacesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addTime" })
  addTime?: string;

  @SpeakeasyMetadata({ data: "json, name=allowMissing" })
  allowMissing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=placeIds" })
  placeIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
