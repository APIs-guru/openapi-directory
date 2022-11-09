import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudChannelV1Sku } from "./googlecloudchannelv1sku";


// GoogleCloudChannelV1ListSkusResponse
/** 
 * Response message for ListSkus.
**/
export class GoogleCloudChannelV1ListSkusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=skus", elemType: shared.GoogleCloudChannelV1Sku })
  skus?: GoogleCloudChannelV1Sku[];
}
