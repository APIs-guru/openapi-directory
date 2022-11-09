import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatapipelinesV1DataflowJobDetails } from "./googleclouddatapipelinesv1dataflowjobdetails";
import { GoogleRpcStatus } from "./googlerpcstatus";

export enum GoogleCloudDatapipelinesV1JobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    StatePending = "STATE_PENDING"
,    StateRunning = "STATE_RUNNING"
,    StateDone = "STATE_DONE"
,    StateFailed = "STATE_FAILED"
,    StateCancelled = "STATE_CANCELLED"
}


// GoogleCloudDatapipelinesV1Job
/** 
 * Definition of the job information maintained by the pipeline. Fields in this entity are retrieved from the executor API (e.g. Dataflow API).
**/
export class GoogleCloudDatapipelinesV1Job extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=dataflowJobDetails" })
  dataflowJobDetails?: GoogleCloudDatapipelinesV1DataflowJobDetails;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudDatapipelinesV1JobStateEnum;

  @Metadata({ data: "json, name=status" })
  status?: GoogleRpcStatus;
}
