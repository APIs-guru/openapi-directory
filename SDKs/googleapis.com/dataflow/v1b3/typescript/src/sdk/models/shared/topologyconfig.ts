import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComputationTopology } from "./computationtopology";
import { DataDiskAssignment } from "./datadiskassignment";



// TopologyConfig
/** 
 * Global topology of the streaming Dataflow job, including all computations and their sharded locations.
**/
export class TopologyConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computations", elemType: ComputationTopology })
  computations?: ComputationTopology[];

  @SpeakeasyMetadata({ data: "json, name=dataDiskAssignments", elemType: DataDiskAssignment })
  dataDiskAssignments?: DataDiskAssignment[];

  @SpeakeasyMetadata({ data: "json, name=forwardingKeyBits" })
  forwardingKeyBits?: number;

  @SpeakeasyMetadata({ data: "json, name=persistentStateVersion" })
  persistentStateVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=userStageToComputationNameMap" })
  userStageToComputationNameMap?: Map<string, string>;
}
