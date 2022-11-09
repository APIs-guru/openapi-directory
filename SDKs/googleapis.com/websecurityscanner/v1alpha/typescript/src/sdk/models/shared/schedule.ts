import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Schedule
/** 
 * Scan schedule configuration.
**/
export class Schedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=intervalDurationDays" })
  intervalDurationDays?: number;

  @Metadata({ data: "json, name=scheduleTime" })
  scheduleTime?: string;
}
