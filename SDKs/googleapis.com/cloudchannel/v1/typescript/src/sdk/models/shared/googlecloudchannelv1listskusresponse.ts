import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Sku } from "./googlecloudchannelv1sku";



// GoogleCloudChannelV1ListSkusResponse
/** 
 * Response message for ListSkus.
**/
export class GoogleCloudChannelV1ListSkusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=skus", elemType: GoogleCloudChannelV1Sku })
  skus?: GoogleCloudChannelV1Sku[];
}
