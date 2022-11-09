import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComputationTopology } from "./computationtopology";
import { DataDiskAssignment } from "./datadiskassignment";


// TopologyConfig
/** 
 * Global topology of the streaming Dataflow job, including all computations and their sharded locations.
**/
export class TopologyConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=computations", elemType: shared.ComputationTopology })
  computations?: ComputationTopology[];

  @Metadata({ data: "json, name=dataDiskAssignments", elemType: shared.DataDiskAssignment })
  dataDiskAssignments?: DataDiskAssignment[];

  @Metadata({ data: "json, name=forwardingKeyBits" })
  forwardingKeyBits?: number;

  @Metadata({ data: "json, name=persistentStateVersion" })
  persistentStateVersion?: number;

  @Metadata({ data: "json, name=userStageToComputationNameMap" })
  userStageToComputationNameMap?: Map<string, string>;
}
