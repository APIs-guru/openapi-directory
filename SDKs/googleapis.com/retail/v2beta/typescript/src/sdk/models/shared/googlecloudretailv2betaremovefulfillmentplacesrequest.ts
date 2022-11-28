import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2betaRemoveFulfillmentPlacesRequest
/** 
 * Request message for ProductService.RemoveFulfillmentPlaces method.
**/
export class GoogleCloudRetailV2betaRemoveFulfillmentPlacesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowMissing" })
  allowMissing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=placeIds" })
  placeIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=removeTime" })
  removeTime?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
