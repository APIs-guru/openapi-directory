import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudVisionV1p2beta1BoundingPoly } from "./googlecloudvisionv1p2beta1boundingpoly";


// GoogleCloudVisionV1p2beta1ProductSearchParams
/** 
 * Parameters for a product search request.
**/
export class GoogleCloudVisionV1p2beta1ProductSearchParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingPoly" })
  boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=productCategories" })
  productCategories?: string[];

  @Metadata({ data: "json, name=productSet" })
  productSet?: string;
}
