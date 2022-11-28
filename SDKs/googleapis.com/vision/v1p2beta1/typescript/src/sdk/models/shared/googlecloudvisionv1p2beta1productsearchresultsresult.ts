import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1Product } from "./googlecloudvisionv1p2beta1product";



// GoogleCloudVisionV1p2beta1ProductSearchResultsResult
/** 
 * Information about a product.
**/
export class GoogleCloudVisionV1p2beta1ProductSearchResultsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: GoogleCloudVisionV1p2beta1Product;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}
