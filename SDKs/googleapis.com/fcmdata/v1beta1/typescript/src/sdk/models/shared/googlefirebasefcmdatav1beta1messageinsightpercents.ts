import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirebaseFcmDataV1beta1MessageInsightPercents
/** 
 * Additional information about message delivery. All percentages are calculated with countMessagesAccepted as the denominator.
**/
export class GoogleFirebaseFcmDataV1beta1MessageInsightPercents extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=priorityLowered" })
  priorityLowered?: number;
}
