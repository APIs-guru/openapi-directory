import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig } from "./googlecloudpaymentsresellersubscriptionv1productpriceconfig";
import { GoogleCloudPaymentsResellerSubscriptionV1Duration } from "./googlecloudpaymentsresellersubscriptionv1duration";
import { GoogleTypeLocalizedText } from "./googletypelocalizedtext";
/**
 * A Product resource that defines a subscription service that can be resold.
**/
export declare class GoogleCloudPaymentsResellerSubscriptionV1Product extends SpeakeasyBase {
    name?: string;
    priceConfigs?: GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig[];
    regionCodes?: string[];
    subscriptionBillingCycleDuration?: GoogleCloudPaymentsResellerSubscriptionV1Duration;
    titles?: GoogleTypeLocalizedText[];
}
