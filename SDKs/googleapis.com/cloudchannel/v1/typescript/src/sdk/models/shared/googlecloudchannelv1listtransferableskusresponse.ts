import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1TransferableSku } from "./googlecloudchannelv1transferablesku";



// GoogleCloudChannelV1ListTransferableSkusResponse
/** 
 * Response message for CloudChannelService.ListTransferableSkus.
**/
export class GoogleCloudChannelV1ListTransferableSkusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=transferableSkus", elemType: GoogleCloudChannelV1TransferableSku })
  transferableSkus?: GoogleCloudChannelV1TransferableSku[];
}
