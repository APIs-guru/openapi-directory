import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDataplexV1JobServiceEnum {
    ServiceUnspecified = "SERVICE_UNSPECIFIED",
    Dataproc = "DATAPROC"
}

export enum GoogleCloudDataplexV1JobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Cancelling = "CANCELLING",
    Cancelled = "CANCELLED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Aborted = "ABORTED"
}


// GoogleCloudDataplexV1Job
/** 
 * A job represents an instance of a task.
**/
export class GoogleCloudDataplexV1Job extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=retryCount" })
  retryCount?: number;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: GoogleCloudDataplexV1JobServiceEnum;

  @SpeakeasyMetadata({ data: "json, name=serviceJob" })
  serviceJob?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudDataplexV1JobStateEnum;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}
