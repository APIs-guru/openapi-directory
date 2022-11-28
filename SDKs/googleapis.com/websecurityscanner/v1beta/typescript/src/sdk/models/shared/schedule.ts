import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Schedule
/** 
 * Scan schedule configuration.
**/
export class Schedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=intervalDurationDays" })
  intervalDurationDays?: number;

  @SpeakeasyMetadata({ data: "json, name=scheduleTime" })
  scheduleTime?: string;
}
