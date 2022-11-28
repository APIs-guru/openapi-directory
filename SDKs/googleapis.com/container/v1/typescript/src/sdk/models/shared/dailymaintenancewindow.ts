import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DailyMaintenanceWindow
/** 
 * Time window specified for daily maintenance operations.
**/
export class DailyMaintenanceWindow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
