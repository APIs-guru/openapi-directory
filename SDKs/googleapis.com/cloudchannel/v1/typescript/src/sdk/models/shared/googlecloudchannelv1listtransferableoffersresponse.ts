import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1TransferableOffer } from "./googlecloudchannelv1transferableoffer";



// GoogleCloudChannelV1ListTransferableOffersResponse
/** 
 * Response message for CloudChannelService.ListTransferableOffers.
**/
export class GoogleCloudChannelV1ListTransferableOffersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=transferableOffers", elemType: GoogleCloudChannelV1TransferableOffer })
  transferableOffers?: GoogleCloudChannelV1TransferableOffer[];
}
