import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatabaseType } from "./databasetype";
import { Status } from "./status";
import { ReverseSshConnectivity } from "./reversesshconnectivity";
import { DatabaseType } from "./databasetype";
import { VpcPeeringConnectivity } from "./vpcpeeringconnectivity";

export enum MigrationJobPhaseEnum {
    PhaseUnspecified = "PHASE_UNSPECIFIED"
,    FullDump = "FULL_DUMP"
,    Cdc = "CDC"
,    PromoteInProgress = "PROMOTE_IN_PROGRESS"
,    WaitingForSourceWritesToStop = "WAITING_FOR_SOURCE_WRITES_TO_STOP"
,    PreparingTheDump = "PREPARING_THE_DUMP"
}

export enum MigrationJobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Maintenance = "MAINTENANCE"
,    Draft = "DRAFT"
,    Creating = "CREATING"
,    NotStarted = "NOT_STARTED"
,    Running = "RUNNING"
,    Failed = "FAILED"
,    Completed = "COMPLETED"
,    Deleting = "DELETING"
,    Stopping = "STOPPING"
,    Stopped = "STOPPED"
,    Deleted = "DELETED"
,    Updating = "UPDATING"
,    Starting = "STARTING"
,    Restarting = "RESTARTING"
,    Resuming = "RESUMING"
}

export enum MigrationJobTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    OneTime = "ONE_TIME"
,    Continuous = "CONTINUOUS"
}


// MigrationJob
/** 
 * Represents a Database Migration Service migration job object.
**/
export class MigrationJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=destination" })
  destination?: string;

  @Metadata({ data: "json, name=destinationDatabase" })
  destinationDatabase?: DatabaseType;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=dumpPath" })
  dumpPath?: string;

  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=error" })
  error?: Status;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=phase" })
  phase?: MigrationJobPhaseEnum;

  @Metadata({ data: "json, name=reverseSshConnectivity" })
  reverseSshConnectivity?: ReverseSshConnectivity;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=sourceDatabase" })
  sourceDatabase?: DatabaseType;

  @Metadata({ data: "json, name=state" })
  state?: MigrationJobStateEnum;

  @Metadata({ data: "json, name=staticIpConnectivity" })
  staticIpConnectivity?: Map<string, any>;

  @Metadata({ data: "json, name=type" })
  type?: MigrationJobTypeEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=vpcPeeringConnectivity" })
  vpcPeeringConnectivity?: VpcPeeringConnectivity;
}
