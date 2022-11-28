import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimestampedEvent } from "./timestampedevent";
import { Status } from "./status";
import { WorkerStatus } from "./workerstatus";



// CheckInRequest
/** 
 * The parameters to the CheckIn method.
**/
export class CheckInRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deadlineExpired" })
  deadlineExpired?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=event" })
  event?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=events", elemType: TimestampedEvent })
  events?: TimestampedEvent[];

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: Status;

  @SpeakeasyMetadata({ data: "json, name=sosReport" })
  sosReport?: string;

  @SpeakeasyMetadata({ data: "json, name=workerStatus" })
  workerStatus?: WorkerStatus;
}
