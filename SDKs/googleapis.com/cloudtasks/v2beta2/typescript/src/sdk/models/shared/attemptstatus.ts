import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Status } from "./status";


// AttemptStatus
/** 
 * The status of a task attempt.
**/
export class AttemptStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=dispatchTime" })
  dispatchTime?: string;

  @Metadata({ data: "json, name=responseStatus" })
  responseStatus?: Status;

  @Metadata({ data: "json, name=responseTime" })
  responseTime?: string;

  @Metadata({ data: "json, name=scheduleTime" })
  scheduleTime?: string;
}
