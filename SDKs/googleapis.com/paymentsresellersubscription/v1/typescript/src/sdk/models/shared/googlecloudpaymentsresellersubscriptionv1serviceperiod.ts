import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod
/** 
 * A description of what time period or moment in time the product or service is being delivered over.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
