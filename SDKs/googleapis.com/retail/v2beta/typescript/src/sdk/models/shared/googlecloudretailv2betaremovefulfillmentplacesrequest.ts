import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2betaRemoveFulfillmentPlacesRequest
/** 
 * Request message for ProductService.RemoveFulfillmentPlaces method.
**/
export class GoogleCloudRetailV2betaRemoveFulfillmentPlacesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowMissing" })
  allowMissing?: boolean;

  @Metadata({ data: "json, name=placeIds" })
  placeIds?: string[];

  @Metadata({ data: "json, name=removeTime" })
  removeTime?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
