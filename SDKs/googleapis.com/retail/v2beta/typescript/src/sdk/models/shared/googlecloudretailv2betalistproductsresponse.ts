import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaProduct } from "./googlecloudretailv2betaproduct";



// GoogleCloudRetailV2betaListProductsResponse
/** 
 * Response message for ProductService.ListProducts method.
**/
export class GoogleCloudRetailV2betaListProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=products", elemType: GoogleCloudRetailV2betaProduct })
  products?: GoogleCloudRetailV2betaProduct[];
}
