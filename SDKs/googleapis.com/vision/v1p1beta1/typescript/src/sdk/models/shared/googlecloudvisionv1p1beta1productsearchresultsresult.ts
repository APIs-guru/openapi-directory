import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudVisionV1p1beta1Product } from "./googlecloudvisionv1p1beta1product";


// GoogleCloudVisionV1p1beta1ProductSearchResultsResult
/** 
 * Information about a product.
**/
export class GoogleCloudVisionV1p1beta1ProductSearchResultsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=product" })
  product?: GoogleCloudVisionV1p1beta1Product;

  @Metadata({ data: "json, name=score" })
  score?: number;
}
