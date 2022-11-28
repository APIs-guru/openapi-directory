import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2ConditionTimeRange
/** 
 * Used for time-dependent conditions. Example: Want to have rule applied for week long sale.
**/
export class GoogleCloudRetailV2ConditionTimeRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
