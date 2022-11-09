import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2betaAddFulfillmentPlacesRequest
/** 
 * Request message for ProductService.AddFulfillmentPlaces method.
**/
export class GoogleCloudRetailV2betaAddFulfillmentPlacesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=addTime" })
  addTime?: string;

  @Metadata({ data: "json, name=allowMissing" })
  allowMissing?: boolean;

  @Metadata({ data: "json, name=placeIds" })
  placeIds?: string[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}
