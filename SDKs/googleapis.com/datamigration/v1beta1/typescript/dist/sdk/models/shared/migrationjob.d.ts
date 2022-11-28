import { SpeakeasyBase } from "../../../internal/utils";
import { DatabaseType } from "./databasetype";
import { Status } from "./status";
import { ReverseSshConnectivity } from "./reversesshconnectivity";
import { VpcPeeringConnectivity } from "./vpcpeeringconnectivity";
export declare enum MigrationJobStateEnum {
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
export declare enum MigrationJobTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    OneTime = "ONE_TIME",
    Continuous = "CONTINUOUS"
}
export declare enum MigrationJobPhaseEnum {
    PhaseUnspecified = "PHASE_UNSPECIFIED",
    FullDump = "FULL_DUMP",
    Cdc = "CDC",
    PromoteInProgress = "PROMOTE_IN_PROGRESS",
    WaitingForSourceWritesToStop = "WAITING_FOR_SOURCE_WRITES_TO_STOP",
    PreparingTheDump = "PREPARING_THE_DUMP"
}
/**
 * Represents a Database Migration Service migration job object.
**/
export declare class MigrationJobInput extends SpeakeasyBase {
    destination?: string;
    destinationDatabase?: DatabaseType;
    displayName?: string;
    dumpPath?: string;
    error?: Status;
    labels?: Map<string, string>;
    name?: string;
    reverseSshConnectivity?: ReverseSshConnectivity;
    source?: string;
    sourceDatabase?: DatabaseType;
    state?: MigrationJobStateEnum;
    staticIpConnectivity?: Map<string, any>;
    type?: MigrationJobTypeEnum;
    vpcPeeringConnectivity?: VpcPeeringConnectivity;
}
/**
 * Represents a Database Migration Service migration job object.
**/
export declare class MigrationJob extends SpeakeasyBase {
    createTime?: string;
    destination?: string;
    destinationDatabase?: DatabaseType;
    displayName?: string;
    dumpPath?: string;
    duration?: string;
    endTime?: string;
    error?: Status;
    labels?: Map<string, string>;
    name?: string;
    phase?: MigrationJobPhaseEnum;
    reverseSshConnectivity?: ReverseSshConnectivity;
    source?: string;
    sourceDatabase?: DatabaseType;
    state?: MigrationJobStateEnum;
    staticIpConnectivity?: Map<string, any>;
    type?: MigrationJobTypeEnum;
    updateTime?: string;
    vpcPeeringConnectivity?: VpcPeeringConnectivity;
}
