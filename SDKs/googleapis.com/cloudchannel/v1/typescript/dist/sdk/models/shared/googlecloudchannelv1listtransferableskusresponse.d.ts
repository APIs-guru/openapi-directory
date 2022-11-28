import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1TransferableSku } from "./googlecloudchannelv1transferablesku";
/**
 * Response message for CloudChannelService.ListTransferableSkus.
**/
export declare class GoogleCloudChannelV1ListTransferableSkusResponse extends SpeakeasyBase {
    nextPageToken?: string;
    transferableSkus?: GoogleCloudChannelV1TransferableSku[];
}
