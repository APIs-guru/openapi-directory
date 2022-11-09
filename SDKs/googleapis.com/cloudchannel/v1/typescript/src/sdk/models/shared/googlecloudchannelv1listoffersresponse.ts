import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudChannelV1Offer } from "./googlecloudchannelv1offer";


// GoogleCloudChannelV1ListOffersResponse
/** 
 * Response message for ListOffers.
**/
export class GoogleCloudChannelV1ListOffersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=offers", elemType: shared.GoogleCloudChannelV1Offer })
  offers?: GoogleCloudChannelV1Offer[];
}
