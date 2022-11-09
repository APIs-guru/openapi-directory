import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudChannelV1TransferableSku } from "./googlecloudchannelv1transferablesku";


// GoogleCloudChannelV1ListTransferableSkusResponse
/** 
 * Response message for CloudChannelService.ListTransferableSkus.
**/
export class GoogleCloudChannelV1ListTransferableSkusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=transferableSkus", elemType: shared.GoogleCloudChannelV1TransferableSku })
  transferableSkus?: GoogleCloudChannelV1TransferableSku[];
}
