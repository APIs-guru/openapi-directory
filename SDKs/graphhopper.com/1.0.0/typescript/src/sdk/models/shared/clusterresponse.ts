import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";


export enum ClusterResponseStatusEnum {
    WaitingInQueue = "waiting_in_queue",
    Processing = "processing",
    Finished = "finished"
}


export class ClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusters", elemType: Cluster })
  clusters?: Cluster[];

  @SpeakeasyMetadata({ data: "json, name=copyrights" })
  copyrights?: string[];

  @SpeakeasyMetadata({ data: "json, name=processing_time" })
  processingTime?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ClusterResponseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=waiting_time_in_queue" })
  waitingTimeInQueue?: number;
}
