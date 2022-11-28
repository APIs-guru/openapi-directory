import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatabaseType } from "./databasetype";
import { Status } from "./status";
import { ReverseSshConnectivity } from "./reversesshconnectivity";
import { VpcPeeringConnectivity } from "./vpcpeeringconnectivity";


export enum MigrationJobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Maintenance = "MAINTENANCE",
    Draft = "DRAFT",
    Creating = "CREATING",
    NotStarted = "NOT_STARTED",
    Running = "RUNNING",
    Failed = "FAILED",
    Completed = "COMPLETED",
    Deleting = "DELETING",
    Stopping = "STOPPING",
    Stopped = "STOPPED",
    Deleted = "DELETED",
    Updating = "UPDATING",
    Starting = "STARTING",
    Restarting = "RESTARTING",
    Resuming = "RESUMING"
}

export enum MigrationJobTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    OneTime = "ONE_TIME",
    Continuous = "CONTINUOUS"
}

export enum MigrationJobPhaseEnum {
    PhaseUnspecified = "PHASE_UNSPECIFIED",
    FullDump = "FULL_DUMP",
    Cdc = "CDC",
    PromoteInProgress = "PROMOTE_IN_PROGRESS",
    WaitingForSourceWritesToStop = "WAITING_FOR_SOURCE_WRITES_TO_STOP",
    PreparingTheDump = "PREPARING_THE_DUMP"
}


// MigrationJobInput
/** 
 * Represents a Database Migration Service migration job object.
**/
export class MigrationJobInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationDatabase" })
  destinationDatabase?: DatabaseType;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=dumpPath" })
  dumpPath?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reverseSshConnectivity" })
  reverseSshConnectivity?: ReverseSshConnectivity;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceDatabase" })
  sourceDatabase?: DatabaseType;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: MigrationJobStateEnum;

  @SpeakeasyMetadata({ data: "json, name=staticIpConnectivity" })
  staticIpConnectivity?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: MigrationJobTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=vpcPeeringConnectivity" })
  vpcPeeringConnectivity?: VpcPeeringConnectivity;
}


// MigrationJob
/** 
 * Represents a Database Migration Service migration job object.
**/
export class MigrationJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationDatabase" })
  destinationDatabase?: DatabaseType;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=dumpPath" })
  dumpPath?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phase" })
  phase?: MigrationJobPhaseEnum;

  @SpeakeasyMetadata({ data: "json, name=reverseSshConnectivity" })
  reverseSshConnectivity?: ReverseSshConnectivity;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceDatabase" })
  sourceDatabase?: DatabaseType;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: MigrationJobStateEnum;

  @SpeakeasyMetadata({ data: "json, name=staticIpConnectivity" })
  staticIpConnectivity?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: MigrationJobTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=vpcPeeringConnectivity" })
  vpcPeeringConnectivity?: VpcPeeringConnectivity;
}
