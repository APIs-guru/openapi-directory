import { SpeakeasyBase } from "../../../internal/utils";
import { ParallelInstruction } from "./parallelinstruction";
/**
 * MapTask consists of an ordered set of instructions, each of which describes one particular low-level operation for the worker to perform in order to accomplish the MapTask's WorkItem. Each instruction must appear in the list before any instructions which depends on its output.
**/
export declare class MapTask extends SpeakeasyBase {
    counterPrefix?: string;
    instructions?: ParallelInstruction[];
    stageName?: string;
    systemName?: string;
}
