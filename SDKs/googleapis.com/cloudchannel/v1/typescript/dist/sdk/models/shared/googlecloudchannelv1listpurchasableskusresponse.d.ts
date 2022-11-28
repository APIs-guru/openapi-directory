import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1PurchasableSku } from "./googlecloudchannelv1purchasablesku";
/**
 * Response message for ListPurchasableSkus.
**/
export declare class GoogleCloudChannelV1ListPurchasableSkusResponse extends SpeakeasyBase {
    nextPageToken?: string;
    purchasableSkus?: GoogleCloudChannelV1PurchasableSku[];
}
