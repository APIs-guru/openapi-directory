import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1TransferableOffer } from "./googlecloudchannelv1transferableoffer";
/**
 * Response message for CloudChannelService.ListTransferableOffers.
**/
export declare class GoogleCloudChannelV1ListTransferableOffersResponse extends SpeakeasyBase {
    nextPageToken?: string;
    transferableOffers?: GoogleCloudChannelV1TransferableOffer[];
}
