import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamingComputationRanges } from "./streamingcomputationranges";
import { MountedDataDisk } from "./mounteddatadisk";


export enum StreamingComputationTaskTaskTypeEnum {
    StreamingComputationTaskUnknown = "STREAMING_COMPUTATION_TASK_UNKNOWN",
    StreamingComputationTaskStop = "STREAMING_COMPUTATION_TASK_STOP",
    StreamingComputationTaskStart = "STREAMING_COMPUTATION_TASK_START"
}


// StreamingComputationTask
/** 
 * A task which describes what action should be performed for the specified streaming computation ranges.
**/
export class StreamingComputationTask extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computationRanges", elemType: StreamingComputationRanges })
  computationRanges?: StreamingComputationRanges[];

  @SpeakeasyMetadata({ data: "json, name=dataDisks", elemType: MountedDataDisk })
  dataDisks?: MountedDataDisk[];

  @SpeakeasyMetadata({ data: "json, name=taskType" })
  taskType?: StreamingComputationTaskTaskTypeEnum;
}
