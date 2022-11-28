import { SpeakeasyBase } from "../../../internal/utils";
import { SchedulingNodeAffinity } from "./schedulingnodeaffinity";
export declare enum ComputeSchedulingOnHostMaintenanceEnum {
    OnHostMaintenanceUnspecified = "ON_HOST_MAINTENANCE_UNSPECIFIED",
    Terminate = "TERMINATE",
    Migrate = "MIGRATE"
}
export declare enum ComputeSchedulingRestartTypeEnum {
    RestartTypeUnspecified = "RESTART_TYPE_UNSPECIFIED",
    AutomaticRestart = "AUTOMATIC_RESTART",
    NoAutomaticRestart = "NO_AUTOMATIC_RESTART"
}
/**
 * Scheduling information for VM on maintenance/restart behaviour and node allocation in sole tenant nodes.
**/
export declare class ComputeScheduling extends SpeakeasyBase {
    minNodeCpus?: number;
    nodeAffinities?: SchedulingNodeAffinity[];
    onHostMaintenance?: ComputeSchedulingOnHostMaintenanceEnum;
    restartType?: ComputeSchedulingRestartTypeEnum;
}
