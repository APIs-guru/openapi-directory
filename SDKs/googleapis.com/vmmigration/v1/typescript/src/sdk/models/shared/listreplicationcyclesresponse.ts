import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicationCycle } from "./replicationcycle";


// ListReplicationCyclesResponse
/** 
 * Response message for 'ListReplicationCycles' request.
**/
export class ListReplicationCyclesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=replicationCycles", elemType: shared.ReplicationCycle })
  replicationCycles?: ReplicationCycle[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
