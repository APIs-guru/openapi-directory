import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Subscription } from "./googlecloudpaymentsresellersubscriptionv1subscription";


// GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse
/** 
 * Response that contains the updated subscription resource.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=subscription" })
  subscription?: GoogleCloudPaymentsResellerSubscriptionV1Subscription;
}
