import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Metric } from "./metric";


export enum OperationProgressStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Done = "DONE",
    Aborting = "ABORTING"
}


// OperationProgress
/** 
 * Information about operation (or operation stage) progress.
**/
export class OperationProgress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: Metric })
  metrics?: Metric[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=stages", elemType: OperationProgress })
  stages?: OperationProgress[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OperationProgressStatusEnum;
}
