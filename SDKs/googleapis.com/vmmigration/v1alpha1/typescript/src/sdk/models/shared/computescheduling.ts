import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SchedulingNodeAffinity } from "./schedulingnodeaffinity";

export enum ComputeSchedulingOnHostMaintenanceEnum {
    OnHostMaintenanceUnspecified = "ON_HOST_MAINTENANCE_UNSPECIFIED"
,    Terminate = "TERMINATE"
,    Migrate = "MIGRATE"
}

export enum ComputeSchedulingRestartTypeEnum {
    RestartTypeUnspecified = "RESTART_TYPE_UNSPECIFIED"
,    AutomaticRestart = "AUTOMATIC_RESTART"
,    NoAutomaticRestart = "NO_AUTOMATIC_RESTART"
}


// ComputeScheduling
/** 
 * Scheduling information for VM on maintenance/restart behaviour and node allocation in sole tenant nodes.
**/
export class ComputeScheduling extends SpeakeasyBase {
  @Metadata({ data: "json, name=automaticRestart" })
  automaticRestart?: boolean;

  @Metadata({ data: "json, name=minNodeCpus" })
  minNodeCpus?: number;

  @Metadata({ data: "json, name=nodeAffinities", elemType: shared.SchedulingNodeAffinity })
  nodeAffinities?: SchedulingNodeAffinity[];

  @Metadata({ data: "json, name=onHostMaintenance" })
  onHostMaintenance?: ComputeSchedulingOnHostMaintenanceEnum;

  @Metadata({ data: "json, name=restartType" })
  restartType?: ComputeSchedulingRestartTypeEnum;
}
