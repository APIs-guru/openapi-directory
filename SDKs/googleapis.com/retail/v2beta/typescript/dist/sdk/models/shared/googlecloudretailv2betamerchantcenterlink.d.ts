import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaMerchantCenterFeedFilter } from "./googlecloudretailv2betamerchantcenterfeedfilter";
/**
 * Represents a link between a Merchant Center account and a branch. Once a link is established, products from the linked merchant center account will be streamed to the linked branch.
**/
export declare class GoogleCloudRetailV2betaMerchantCenterLink extends SpeakeasyBase {
    branchId?: string;
    destinations?: string[];
    feeds?: GoogleCloudRetailV2betaMerchantCenterFeedFilter[];
    languageCode?: string;
    merchantCenterAccountId?: string;
    regionCode?: string;
}
