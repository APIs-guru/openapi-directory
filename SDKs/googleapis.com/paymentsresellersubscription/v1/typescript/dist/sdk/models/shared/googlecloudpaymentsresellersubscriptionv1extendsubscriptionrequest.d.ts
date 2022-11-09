import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Extension } from "./googlecloudpaymentsresellersubscriptionv1extension";
/**
 * Request message for extending a Subscription resource. A new recurrence will be made based on the subscription schedule defined by the original product.
**/
export declare class GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest extends SpeakeasyBase {
    extension?: GoogleCloudPaymentsResellerSubscriptionV1Extension;
    requestId?: string;
}
