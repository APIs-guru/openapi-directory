import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Solution } from "./solution";


export enum ResponseStatusEnum {
    WaitingInQueue = "waiting_in_queue",
    Processing = "processing",
    Finished = "finished"
}


export class Response extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyrights" })
  copyrights?: string[];

  @SpeakeasyMetadata({ data: "json, name=processing_time" })
  processingTime?: number;

  @SpeakeasyMetadata({ data: "json, name=solution" })
  solution?: Solution;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ResponseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=waiting_time_in_queue" })
  waitingTimeInQueue?: number;
}
