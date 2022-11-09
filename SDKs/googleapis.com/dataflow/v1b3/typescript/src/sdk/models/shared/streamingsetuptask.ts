import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamingApplianceSnapshotConfig } from "./streamingappliancesnapshotconfig";
import { TopologyConfig } from "./topologyconfig";


// StreamingSetupTask
/** 
 * A task which initializes part of a streaming Dataflow job.
**/
export class StreamingSetupTask extends SpeakeasyBase {
  @Metadata({ data: "json, name=drain" })
  drain?: boolean;

  @Metadata({ data: "json, name=receiveWorkPort" })
  receiveWorkPort?: number;

  @Metadata({ data: "json, name=snapshotConfig" })
  snapshotConfig?: StreamingApplianceSnapshotConfig;

  @Metadata({ data: "json, name=streamingComputationTopology" })
  streamingComputationTopology?: TopologyConfig;

  @Metadata({ data: "json, name=workerHarnessPort" })
  workerHarnessPort?: number;
}
