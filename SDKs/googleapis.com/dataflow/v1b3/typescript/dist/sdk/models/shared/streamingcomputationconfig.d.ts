import { SpeakeasyBase } from "../../../internal/utils";
import { ParallelInstruction } from "./parallelinstruction";
/**
 * Configuration information for a single streaming computation.
**/
export declare class StreamingComputationConfig extends SpeakeasyBase {
    computationId?: string;
    instructions?: ParallelInstruction[];
    stageName?: string;
    systemName?: string;
    transformUserNameToStateFamily?: Map<string, string>;
}
