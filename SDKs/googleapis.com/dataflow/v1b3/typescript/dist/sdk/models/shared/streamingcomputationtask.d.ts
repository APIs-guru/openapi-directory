import { SpeakeasyBase } from "../../../internal/utils";
import { StreamingComputationRanges } from "./streamingcomputationranges";
import { MountedDataDisk } from "./mounteddatadisk";
export declare enum StreamingComputationTaskTaskTypeEnum {
    StreamingComputationTaskUnknown = "STREAMING_COMPUTATION_TASK_UNKNOWN",
    StreamingComputationTaskStop = "STREAMING_COMPUTATION_TASK_STOP",
    StreamingComputationTaskStart = "STREAMING_COMPUTATION_TASK_START"
}
/**
 * A task which describes what action should be performed for the specified streaming computation ranges.
**/
export declare class StreamingComputationTask extends SpeakeasyBase {
    computationRanges?: StreamingComputationRanges[];
    dataDisks?: MountedDataDisk[];
    taskType?: StreamingComputationTaskTaskTypeEnum;
}
