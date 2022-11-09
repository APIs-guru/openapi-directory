import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudVisionV1p2beta1Product } from "./googlecloudvisionv1p2beta1product";


// GoogleCloudVisionV1p2beta1ProductSearchResultsResult
/** 
 * Information about a product.
**/
export class GoogleCloudVisionV1p2beta1ProductSearchResultsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=product" })
  product?: GoogleCloudVisionV1p2beta1Product;

  @Metadata({ data: "json, name=score" })
  score?: number;
}
