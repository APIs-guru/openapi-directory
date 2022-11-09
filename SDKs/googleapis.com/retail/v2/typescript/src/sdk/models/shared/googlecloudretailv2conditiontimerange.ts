import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2ConditionTimeRange
/** 
 * Used for time-dependent conditions. Example: Want to have rule applied for week long sale.
**/
export class GoogleCloudRetailV2ConditionTimeRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
