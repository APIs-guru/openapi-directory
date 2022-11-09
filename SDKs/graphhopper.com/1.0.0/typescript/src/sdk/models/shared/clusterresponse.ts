import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Cluster } from "./cluster";

export enum ClusterResponseStatusEnum {
    WaitingInQueue = "waiting_in_queue"
,    Processing = "processing"
,    Finished = "finished"
}


export class ClusterResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusters", elemType: shared.Cluster })
  clusters?: Cluster[];

  @Metadata({ data: "json, name=copyrights" })
  copyrights?: string[];

  @Metadata({ data: "json, name=processing_time" })
  processingTime?: number;

  @Metadata({ data: "json, name=status" })
  status?: ClusterResponseStatusEnum;

  @Metadata({ data: "json, name=waiting_time_in_queue" })
  waitingTimeInQueue?: number;
}
