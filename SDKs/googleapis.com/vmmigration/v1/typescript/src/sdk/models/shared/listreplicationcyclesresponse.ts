import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationCycle } from "./replicationcycle";



// ListReplicationCyclesResponse
/** 
 * Response message for 'ListReplicationCycles' request.
**/
export class ListReplicationCyclesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=replicationCycles", elemType: ReplicationCycle })
  replicationCycles?: ReplicationCycle[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
