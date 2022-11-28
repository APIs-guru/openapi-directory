import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";



// AttemptStatus
/** 
 * The status of a task attempt.
**/
export class AttemptStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dispatchTime" })
  dispatchTime?: string;

  @SpeakeasyMetadata({ data: "json, name=responseStatus" })
  responseStatus?: Status;

  @SpeakeasyMetadata({ data: "json, name=responseTime" })
  responseTime?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleTime" })
  scheduleTime?: string;
}
