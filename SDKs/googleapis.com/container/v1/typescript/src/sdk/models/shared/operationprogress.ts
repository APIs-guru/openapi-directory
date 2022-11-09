import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Metric } from "./metric";
import { OperationProgress } from "./operationprogress";

export enum OperationProgressStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED"
,    Pending = "PENDING"
,    Running = "RUNNING"
,    Done = "DONE"
,    Aborting = "ABORTING"
}


// OperationProgress
/** 
 * Information about operation (or operation stage) progress.
**/
export class OperationProgress extends SpeakeasyBase {
  @Metadata({ data: "json, name=metrics", elemType: shared.Metric })
  metrics?: Metric[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=stages", elemType: shared.OperationProgress })
  stages?: OperationProgress[];

  @Metadata({ data: "json, name=status" })
  status?: OperationProgressStatusEnum;
}
