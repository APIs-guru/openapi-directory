import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Subscription } from "./googlecloudpaymentsresellersubscriptionv1subscription";



// GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse
/** 
 * Response that contains the updated subscription resource.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription?: GoogleCloudPaymentsResellerSubscriptionV1Subscription;
}
