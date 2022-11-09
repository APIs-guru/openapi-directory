import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents } from "./googlefirebasefcmdatav1beta1deliveryperformancepercents";
import { GoogleFirebaseFcmDataV1beta1MessageInsightPercents } from "./googlefirebasefcmdatav1beta1messageinsightpercents";
import { GoogleFirebaseFcmDataV1beta1MessageOutcomePercents } from "./googlefirebasefcmdatav1beta1messageoutcomepercents";
/**
 * Data detailing messaging delivery
**/
export declare class GoogleFirebaseFcmDataV1beta1Data extends SpeakeasyBase {
    countMessagesAccepted?: string;
    deliveryPerformancePercents?: GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents;
    messageInsightPercents?: GoogleFirebaseFcmDataV1beta1MessageInsightPercents;
    messageOutcomePercents?: GoogleFirebaseFcmDataV1beta1MessageOutcomePercents;
}
