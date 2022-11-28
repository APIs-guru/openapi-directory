import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceExclusionOptions } from "./maintenanceexclusionoptions";



// TimeWindow
/** 
 * Represents an arbitrary window of time.
**/
export class TimeWindow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=maintenanceExclusionOptions" })
  maintenanceExclusionOptions?: MaintenanceExclusionOptions;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
