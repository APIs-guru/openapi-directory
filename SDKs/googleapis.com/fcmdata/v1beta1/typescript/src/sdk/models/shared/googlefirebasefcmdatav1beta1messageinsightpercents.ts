import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleFirebaseFcmDataV1beta1MessageInsightPercents
/** 
 * Additional information about message delivery. All percentages are calculated with countMessagesAccepted as the denominator.
**/
export class GoogleFirebaseFcmDataV1beta1MessageInsightPercents extends SpeakeasyBase {
  @Metadata({ data: "json, name=priorityLowered" })
  priorityLowered?: number;
}
