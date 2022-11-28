import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Product } from "./googlecloudchannelv1product";



// GoogleCloudChannelV1ListProductsResponse
/** 
 * Response message for ListProducts.
**/
export class GoogleCloudChannelV1ListProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=products", elemType: GoogleCloudChannelV1Product })
  products?: GoogleCloudChannelV1Product[];
}
