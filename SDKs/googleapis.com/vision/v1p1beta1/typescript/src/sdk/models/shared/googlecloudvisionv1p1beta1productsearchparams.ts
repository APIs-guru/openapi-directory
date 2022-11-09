import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudVisionV1p1beta1BoundingPoly } from "./googlecloudvisionv1p1beta1boundingpoly";


// GoogleCloudVisionV1p1beta1ProductSearchParams
/** 
 * Parameters for a product search request.
**/
export class GoogleCloudVisionV1p1beta1ProductSearchParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingPoly" })
  boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=productCategories" })
  productCategories?: string[];

  @Metadata({ data: "json, name=productSet" })
  productSet?: string;
}
