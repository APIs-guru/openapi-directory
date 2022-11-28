import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoConditionResult } from "./enterprisecrmeventbusprotoconditionresult";
import { EnterpriseCrmEventbusProtoEventParameters } from "./enterprisecrmeventbusprotoeventparameters";
import { EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata } from "./enterprisecrmeventbusprotoeventexecutionsnapshoteventexecutionsnapshotmetadata";
import { EnterpriseCrmEventbusProtoTaskExecutionDetails } from "./enterprisecrmeventbusprototaskexecutiondetails";
/**
 * Contains the snapshot of the event execution for a given checkpoint. Next available id: 13
**/
export declare class EnterpriseCrmEventbusProtoEventExecutionSnapshot extends SpeakeasyBase {
    checkpointTaskNumber?: string;
    conditionResults?: EnterpriseCrmEventbusProtoConditionResult[];
    diffParams?: EnterpriseCrmEventbusProtoEventParameters;
    eventExecutionInfoId?: string;
    eventExecutionSnapshotId?: string;
    eventExecutionSnapshotMetadata?: EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata;
    eventParams?: EnterpriseCrmEventbusProtoEventParameters;
    exceedMaxSize?: boolean;
    snapshotTime?: string;
    taskExecutionDetails?: EnterpriseCrmEventbusProtoTaskExecutionDetails[];
    taskName?: string;
}
