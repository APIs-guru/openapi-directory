import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamingApplianceSnapshotConfig } from "./streamingappliancesnapshotconfig";
import { TopologyConfig } from "./topologyconfig";



// StreamingSetupTask
/** 
 * A task which initializes part of a streaming Dataflow job.
**/
export class StreamingSetupTask extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=drain" })
  drain?: boolean;

  @SpeakeasyMetadata({ data: "json, name=receiveWorkPort" })
  receiveWorkPort?: number;

  @SpeakeasyMetadata({ data: "json, name=snapshotConfig" })
  snapshotConfig?: StreamingApplianceSnapshotConfig;

  @SpeakeasyMetadata({ data: "json, name=streamingComputationTopology" })
  streamingComputationTopology?: TopologyConfig;

  @SpeakeasyMetadata({ data: "json, name=workerHarnessPort" })
  workerHarnessPort?: number;
}
