import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1Product } from "./googlecloudvisionv1p1beta1product";



// GoogleCloudVisionV1p1beta1ProductSearchResultsResult
/** 
 * Information about a product.
**/
export class GoogleCloudVisionV1p1beta1ProductSearchResultsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: GoogleCloudVisionV1p1beta1Product;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}
