import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaProduct } from "./googlecloudretailv2alphaproduct";



// GoogleCloudRetailV2alphaListProductsResponse
/** 
 * Response message for ProductService.ListProducts method.
**/
export class GoogleCloudRetailV2alphaListProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=products", elemType: GoogleCloudRetailV2alphaProduct })
  products?: GoogleCloudRetailV2alphaProduct[];

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
