import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2Product } from "./googlecloudretailv2product";


// GoogleCloudRetailV2ListProductsResponse
/** 
 * Response message for ProductService.ListProducts method.
**/
export class GoogleCloudRetailV2ListProductsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=products", elemType: shared.GoogleCloudRetailV2Product })
  products?: GoogleCloudRetailV2Product[];
}
