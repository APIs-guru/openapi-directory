import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SqlScheduledMaintenance
/** 
 * Any scheduled maintenance for this instance.
**/
export class SqlScheduledMaintenance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canDefer" })
  canDefer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canReschedule" })
  canReschedule?: boolean;

  @SpeakeasyMetadata({ data: "json, name=scheduleDeadlineTime" })
  scheduleDeadlineTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
