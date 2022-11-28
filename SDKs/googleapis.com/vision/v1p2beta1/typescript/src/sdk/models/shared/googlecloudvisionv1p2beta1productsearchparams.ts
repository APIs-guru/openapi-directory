import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1BoundingPoly } from "./googlecloudvisionv1p2beta1boundingpoly";



// GoogleCloudVisionV1p2beta1ProductSearchParams
/** 
 * Parameters for a product search request.
**/
export class GoogleCloudVisionV1p2beta1ProductSearchParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingPoly" })
  boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=productCategories" })
  productCategories?: string[];

  @SpeakeasyMetadata({ data: "json, name=productSet" })
  productSet?: string;
}
