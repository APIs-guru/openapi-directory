import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig } from "./googlecloudpaymentsresellersubscriptionv1productpriceconfig";
import { GoogleCloudPaymentsResellerSubscriptionV1Duration } from "./googlecloudpaymentsresellersubscriptionv1duration";
import { GoogleTypeLocalizedText } from "./googletypelocalizedtext";


// GoogleCloudPaymentsResellerSubscriptionV1Product
/** 
 * A Product resource that defines a subscription service that can be resold.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1Product extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=priceConfigs", elemType: shared.GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig })
  priceConfigs?: GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig[];

  @Metadata({ data: "json, name=regionCodes" })
  regionCodes?: string[];

  @Metadata({ data: "json, name=subscriptionBillingCycleDuration" })
  subscriptionBillingCycleDuration?: GoogleCloudPaymentsResellerSubscriptionV1Duration;

  @Metadata({ data: "json, name=titles", elemType: shared.GoogleTypeLocalizedText })
  titles?: GoogleTypeLocalizedText[];
}
