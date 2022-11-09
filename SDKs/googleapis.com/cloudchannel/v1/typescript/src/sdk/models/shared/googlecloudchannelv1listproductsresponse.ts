import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudChannelV1Product } from "./googlecloudchannelv1product";


// GoogleCloudChannelV1ListProductsResponse
/** 
 * Response message for ListProducts.
**/
export class GoogleCloudChannelV1ListProductsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=products", elemType: shared.GoogleCloudChannelV1Product })
  products?: GoogleCloudChannelV1Product[];
}
