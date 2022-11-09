import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DailyMaintenanceWindow
/** 
 * Time window specified for daily maintenance operations.
**/
export class DailyMaintenanceWindow extends SpeakeasyBase {
  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
