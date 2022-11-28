import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2RemoveFulfillmentPlacesRequest
/** 
 * Request message for ProductService.RemoveFulfillmentPlaces method.
**/
export class GoogleCloudRetailV2RemoveFulfillmentPlacesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowMissing" })
  allowMissing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=placeIds" })
  placeIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=removeTime" })
  removeTime?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
