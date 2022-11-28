import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaMerchantCenterFeedFilter } from "./googlecloudretailv2alphamerchantcenterfeedfilter";
/**
 * Represents a link between a Merchant Center account and a branch. Once a link is established, products from the linked merchant center account will be streamed to the linked branch.
**/
export declare class GoogleCloudRetailV2alphaMerchantCenterLink extends SpeakeasyBase {
    branchId?: string;
    destinations?: string[];
    feeds?: GoogleCloudRetailV2alphaMerchantCenterFeedFilter[];
    languageCode?: string;
    merchantCenterAccountId?: string;
    regionCode?: string;
}
