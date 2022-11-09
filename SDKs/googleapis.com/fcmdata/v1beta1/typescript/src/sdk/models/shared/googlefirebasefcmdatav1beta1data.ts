import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents } from "./googlefirebasefcmdatav1beta1deliveryperformancepercents";
import { GoogleFirebaseFcmDataV1beta1MessageInsightPercents } from "./googlefirebasefcmdatav1beta1messageinsightpercents";
import { GoogleFirebaseFcmDataV1beta1MessageOutcomePercents } from "./googlefirebasefcmdatav1beta1messageoutcomepercents";


// GoogleFirebaseFcmDataV1beta1Data
/** 
 * Data detailing messaging delivery
**/
export class GoogleFirebaseFcmDataV1beta1Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=countMessagesAccepted" })
  countMessagesAccepted?: string;

  @Metadata({ data: "json, name=deliveryPerformancePercents" })
  deliveryPerformancePercents?: GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents;

  @Metadata({ data: "json, name=messageInsightPercents" })
  messageInsightPercents?: GoogleFirebaseFcmDataV1beta1MessageInsightPercents;

  @Metadata({ data: "json, name=messageOutcomePercents" })
  messageOutcomePercents?: GoogleFirebaseFcmDataV1beta1MessageOutcomePercents;
}
