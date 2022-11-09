import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDataplexV1JobServiceEnum {
    ServiceUnspecified = "SERVICE_UNSPECIFIED"
,    Dataproc = "DATAPROC"
}

export enum GoogleCloudDataplexV1JobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Running = "RUNNING"
,    Cancelling = "CANCELLING"
,    Cancelled = "CANCELLED"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
,    Aborted = "ABORTED"
}


// GoogleCloudDataplexV1Job
/** 
 * A job represents an instance of a task.
**/
export class GoogleCloudDataplexV1Job extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=retryCount" })
  retryCount?: number;

  @Metadata({ data: "json, name=service" })
  service?: GoogleCloudDataplexV1JobServiceEnum;

  @Metadata({ data: "json, name=serviceJob" })
  serviceJob?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudDataplexV1JobStateEnum;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}
