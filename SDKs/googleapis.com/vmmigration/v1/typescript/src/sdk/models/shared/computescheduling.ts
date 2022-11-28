import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchedulingNodeAffinity } from "./schedulingnodeaffinity";


export enum ComputeSchedulingOnHostMaintenanceEnum {
    OnHostMaintenanceUnspecified = "ON_HOST_MAINTENANCE_UNSPECIFIED",
    Terminate = "TERMINATE",
    Migrate = "MIGRATE"
}

export enum ComputeSchedulingRestartTypeEnum {
    RestartTypeUnspecified = "RESTART_TYPE_UNSPECIFIED",
    AutomaticRestart = "AUTOMATIC_RESTART",
    NoAutomaticRestart = "NO_AUTOMATIC_RESTART"
}


// ComputeScheduling
/** 
 * Scheduling information for VM on maintenance/restart behaviour and node allocation in sole tenant nodes.
**/
export class ComputeScheduling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=minNodeCpus" })
  minNodeCpus?: number;

  @SpeakeasyMetadata({ data: "json, name=nodeAffinities", elemType: SchedulingNodeAffinity })
  nodeAffinities?: SchedulingNodeAffinity[];

  @SpeakeasyMetadata({ data: "json, name=onHostMaintenance" })
  onHostMaintenance?: ComputeSchedulingOnHostMaintenanceEnum;

  @SpeakeasyMetadata({ data: "json, name=restartType" })
  restartType?: ComputeSchedulingRestartTypeEnum;
}
