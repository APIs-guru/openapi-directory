import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Offer } from "./googlecloudchannelv1offer";



// GoogleCloudChannelV1ListOffersResponse
/** 
 * Response message for ListOffers.
**/
export class GoogleCloudChannelV1ListOffersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=offers", elemType: GoogleCloudChannelV1Offer })
  offers?: GoogleCloudChannelV1Offer[];
}
