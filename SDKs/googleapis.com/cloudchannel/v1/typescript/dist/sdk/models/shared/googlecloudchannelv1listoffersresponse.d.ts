import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Offer } from "./googlecloudchannelv1offer";
/**
 * Response message for ListOffers.
**/
export declare class GoogleCloudChannelV1ListOffersResponse extends SpeakeasyBase {
    nextPageToken?: string;
    offers?: GoogleCloudChannelV1Offer[];
}
