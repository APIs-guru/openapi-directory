import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for CloudChannelService.ListTransferableOffers
**/
export declare class GoogleCloudChannelV1ListTransferableOffersRequest extends SpeakeasyBase {
    cloudIdentityId?: string;
    customerName?: string;
    languageCode?: string;
    pageSize?: number;
    pageToken?: string;
    sku?: string;
}
