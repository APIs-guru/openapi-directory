import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SqlScheduledMaintenance
/** 
 * Any scheduled maintenance for this instance.
**/
export class SqlScheduledMaintenance extends SpeakeasyBase {
  @Metadata({ data: "json, name=canDefer" })
  canDefer?: boolean;

  @Metadata({ data: "json, name=canReschedule" })
  canReschedule?: boolean;

  @Metadata({ data: "json, name=scheduleDeadlineTime" })
  scheduleDeadlineTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
