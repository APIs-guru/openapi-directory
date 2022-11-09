import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Solution } from "./solution";

export enum ResponseStatusEnum {
    WaitingInQueue = "waiting_in_queue"
,    Processing = "processing"
,    Finished = "finished"
}


export class Response extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyrights" })
  copyrights?: string[];

  @Metadata({ data: "json, name=processing_time" })
  processingTime?: number;

  @Metadata({ data: "json, name=solution" })
  solution?: Solution;

  @Metadata({ data: "json, name=status" })
  status?: ResponseStatusEnum;

  @Metadata({ data: "json, name=waiting_time_in_queue" })
  waitingTimeInQueue?: number;
}
