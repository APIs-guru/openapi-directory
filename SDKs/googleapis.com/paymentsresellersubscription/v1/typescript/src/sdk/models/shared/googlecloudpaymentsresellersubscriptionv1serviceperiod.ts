import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod
/** 
 * A description of what time period or moment in time the product or service is being delivered over.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
