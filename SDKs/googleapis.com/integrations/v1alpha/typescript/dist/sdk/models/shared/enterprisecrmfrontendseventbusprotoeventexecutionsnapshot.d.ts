import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoConditionResult } from "./enterprisecrmeventbusprotoconditionresult";
import { EnterpriseCrmFrontendsEventbusProtoEventParameters } from "./enterprisecrmfrontendseventbusprotoeventparameters";
import { EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata } from "./enterprisecrmeventbusprotoeventexecutionsnapshoteventexecutionsnapshotmetadata";
import { EnterpriseCrmEventbusProtoTaskExecutionDetails } from "./enterprisecrmeventbusprototaskexecutiondetails";
export declare class EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot extends SpeakeasyBase {
    checkpointTaskNumber?: string;
    conditionResults?: EnterpriseCrmEventbusProtoConditionResult[];
    diffParams?: EnterpriseCrmFrontendsEventbusProtoEventParameters;
    eventExecutionInfoId?: string;
    eventExecutionSnapshotId?: string;
    eventExecutionSnapshotMetadata?: EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata;
    eventParams?: EnterpriseCrmFrontendsEventbusProtoEventParameters;
    snapshotTime?: string;
    taskExecutionDetails?: EnterpriseCrmEventbusProtoTaskExecutionDetails[];
    taskName?: string;
}
