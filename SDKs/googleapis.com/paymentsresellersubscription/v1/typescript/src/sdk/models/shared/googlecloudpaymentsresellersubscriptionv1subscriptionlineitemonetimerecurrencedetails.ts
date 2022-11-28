import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod } from "./googlecloudpaymentsresellersubscriptionv1serviceperiod";



// GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails
/** 
 * Details for a ONE_TIME recurrence line item.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=servicePeriod" })
  servicePeriod?: GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod;
}
