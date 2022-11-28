import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1PurchasableOffer } from "./googlecloudchannelv1purchasableoffer";
/**
 * Response message for ListPurchasableOffers.
**/
export declare class GoogleCloudChannelV1ListPurchasableOffersResponse extends SpeakeasyBase {
    nextPageToken?: string;
    purchasableOffers?: GoogleCloudChannelV1PurchasableOffer[];
}
