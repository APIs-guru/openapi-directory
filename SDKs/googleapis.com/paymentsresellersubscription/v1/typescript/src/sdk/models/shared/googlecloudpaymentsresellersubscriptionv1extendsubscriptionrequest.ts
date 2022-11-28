import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Extension } from "./googlecloudpaymentsresellersubscriptionv1extension";



// GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest
/** 
 * Request message for extending a Subscription resource. A new recurrence will be made based on the subscription schedule defined by the original product.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension" })
  extension?: GoogleCloudPaymentsResellerSubscriptionV1Extension;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
