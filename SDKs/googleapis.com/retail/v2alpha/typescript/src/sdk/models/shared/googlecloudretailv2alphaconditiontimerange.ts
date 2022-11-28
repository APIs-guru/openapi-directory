import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2alphaConditionTimeRange
/** 
 * Used for time-dependent conditions. Example: Want to have rule applied for week long sale.
**/
export class GoogleCloudRetailV2alphaConditionTimeRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
