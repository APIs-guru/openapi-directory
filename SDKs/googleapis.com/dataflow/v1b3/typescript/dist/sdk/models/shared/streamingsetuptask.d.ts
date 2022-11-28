import { SpeakeasyBase } from "../../../internal/utils";
import { StreamingApplianceSnapshotConfig } from "./streamingappliancesnapshotconfig";
import { TopologyConfig } from "./topologyconfig";
/**
 * A task which initializes part of a streaming Dataflow job.
**/
export declare class StreamingSetupTask extends SpeakeasyBase {
    drain?: boolean;
    receiveWorkPort?: number;
    snapshotConfig?: StreamingApplianceSnapshotConfig;
    streamingComputationTopology?: TopologyConfig;
    workerHarnessPort?: number;
}
