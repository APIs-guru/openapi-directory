import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig } from "./googlecloudpaymentsresellersubscriptionv1productpriceconfig";
import { GoogleCloudPaymentsResellerSubscriptionV1Duration } from "./googlecloudpaymentsresellersubscriptionv1duration";
import { GoogleTypeLocalizedText } from "./googletypelocalizedtext";



// GoogleCloudPaymentsResellerSubscriptionV1Product
/** 
 * A Product resource that defines a subscription service that can be resold.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1Product extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=priceConfigs", elemType: GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig })
  priceConfigs?: GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig[];

  @SpeakeasyMetadata({ data: "json, name=regionCodes" })
  regionCodes?: string[];

  @SpeakeasyMetadata({ data: "json, name=subscriptionBillingCycleDuration" })
  subscriptionBillingCycleDuration?: GoogleCloudPaymentsResellerSubscriptionV1Duration;

  @SpeakeasyMetadata({ data: "json, name=titles", elemType: GoogleTypeLocalizedText })
  titles?: GoogleTypeLocalizedText[];
}
