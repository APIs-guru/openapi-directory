import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationCycle } from "./replicationcycle";
/**
 * CutoverStep holds information about the cutover step progress.
**/
export declare class CutoverStep extends SpeakeasyBase {
    endTime?: string;
    finalSync?: ReplicationCycle;
    instantiatingMigratedVm?: Map<string, any>;
    preparingVmDisks?: Map<string, any>;
    previousReplicationCycle?: ReplicationCycle;
    shuttingDownSourceVm?: Map<string, any>;
    startTime?: string;
}
