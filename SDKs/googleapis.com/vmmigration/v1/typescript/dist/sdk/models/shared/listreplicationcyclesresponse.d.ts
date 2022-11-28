import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationCycle } from "./replicationcycle";
/**
 * Response message for 'ListReplicationCycles' request.
**/
export declare class ListReplicationCyclesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    replicationCycles?: ReplicationCycle[];
    unreachable?: string[];
}
