import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2betaProduct } from "./googlecloudretailv2betaproduct";


// GoogleCloudRetailV2betaListProductsResponse
/** 
 * Response message for ProductService.ListProducts method.
**/
export class GoogleCloudRetailV2betaListProductsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=products", elemType: shared.GoogleCloudRetailV2betaProduct })
  products?: GoogleCloudRetailV2betaProduct[];
}
