import { SpeakeasyBase } from "../../../internal/utils";
import { ComputationTopology } from "./computationtopology";
import { DataDiskAssignment } from "./datadiskassignment";
/**
 * Global topology of the streaming Dataflow job, including all computations and their sharded locations.
**/
export declare class TopologyConfig extends SpeakeasyBase {
    computations?: ComputationTopology[];
    dataDiskAssignments?: DataDiskAssignment[];
    forwardingKeyBits?: number;
    persistentStateVersion?: number;
    userStageToComputationNameMap?: Map<string, string>;
}
