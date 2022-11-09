import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MaintenanceExclusionOptions } from "./maintenanceexclusionoptions";


// TimeWindow
/** 
 * Represents an arbitrary window of time.
**/
export class TimeWindow extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=maintenanceExclusionOptions" })
  maintenanceExclusionOptions?: MaintenanceExclusionOptions;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
