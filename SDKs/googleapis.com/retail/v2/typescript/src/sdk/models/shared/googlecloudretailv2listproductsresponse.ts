import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2Product } from "./googlecloudretailv2product";



// GoogleCloudRetailV2ListProductsResponse
/** 
 * Response message for ProductService.ListProducts method.
**/
export class GoogleCloudRetailV2ListProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=products", elemType: GoogleCloudRetailV2Product })
  products?: GoogleCloudRetailV2Product[];
}
