import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2alphaProduct } from "./googlecloudretailv2alphaproduct";


// GoogleCloudRetailV2alphaListProductsResponse
/** 
 * Response message for ProductService.ListProducts method.
**/
export class GoogleCloudRetailV2alphaListProductsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=products", elemType: shared.GoogleCloudRetailV2alphaProduct })
  products?: GoogleCloudRetailV2alphaProduct[];

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
