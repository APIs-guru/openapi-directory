import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudChannelV1TransferableOffer } from "./googlecloudchannelv1transferableoffer";


// GoogleCloudChannelV1ListTransferableOffersResponse
/** 
 * Response message for CloudChannelService.ListTransferableOffers.
**/
export class GoogleCloudChannelV1ListTransferableOffersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=transferableOffers", elemType: shared.GoogleCloudChannelV1TransferableOffer })
  transferableOffers?: GoogleCloudChannelV1TransferableOffer[];
}
