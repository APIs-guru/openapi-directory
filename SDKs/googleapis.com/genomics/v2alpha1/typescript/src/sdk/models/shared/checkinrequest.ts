import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TimestampedEvent } from "./timestampedevent";
import { Status } from "./status";
import { WorkerStatus } from "./workerstatus";


// CheckInRequest
/** 
 * The parameters to the CheckIn method.
**/
export class CheckInRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=deadlineExpired" })
  deadlineExpired?: Map<string, any>;

  @Metadata({ data: "json, name=event" })
  event?: Map<string, any>;

  @Metadata({ data: "json, name=events", elemType: shared.TimestampedEvent })
  events?: TimestampedEvent[];

  @Metadata({ data: "json, name=result" })
  result?: Status;

  @Metadata({ data: "json, name=sosReport" })
  sosReport?: string;

  @Metadata({ data: "json, name=workerStatus" })
  workerStatus?: WorkerStatus;
}
