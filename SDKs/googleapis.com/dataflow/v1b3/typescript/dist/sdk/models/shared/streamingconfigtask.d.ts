import { SpeakeasyBase } from "../../../internal/utils";
import { StreamingComputationConfig } from "./streamingcomputationconfig";
/**
 * A task that carries configuration information for streaming computations.
**/
export declare class StreamingConfigTask extends SpeakeasyBase {
    commitStreamChunkSizeBytes?: string;
    getDataStreamChunkSizeBytes?: string;
    maxWorkItemCommitBytes?: string;
    streamingComputationConfigs?: StreamingComputationConfig[];
    userStepToStateFamilyNameMap?: Map<string, string>;
    windmillServiceEndpoint?: string;
    windmillServicePort?: string;
}
