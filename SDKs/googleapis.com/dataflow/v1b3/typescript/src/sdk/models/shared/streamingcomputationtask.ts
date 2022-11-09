import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StreamingComputationRanges } from "./streamingcomputationranges";
import { MountedDataDisk } from "./mounteddatadisk";

export enum StreamingComputationTaskTaskTypeEnum {
    StreamingComputationTaskUnknown = "STREAMING_COMPUTATION_TASK_UNKNOWN"
,    StreamingComputationTaskStop = "STREAMING_COMPUTATION_TASK_STOP"
,    StreamingComputationTaskStart = "STREAMING_COMPUTATION_TASK_START"
}


// StreamingComputationTask
/** 
 * A task which describes what action should be performed for the specified streaming computation ranges.
**/
export class StreamingComputationTask extends SpeakeasyBase {
  @Metadata({ data: "json, name=computationRanges", elemType: shared.StreamingComputationRanges })
  computationRanges?: StreamingComputationRanges[];

  @Metadata({ data: "json, name=dataDisks", elemType: shared.MountedDataDisk })
  dataDisks?: MountedDataDisk[];

  @Metadata({ data: "json, name=taskType" })
  taskType?: StreamingComputationTaskTaskTypeEnum;
}
