import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoConditionResult } from "./enterprisecrmeventbusprotoconditionresult";
import { EnterpriseCrmFrontendsEventbusProtoEventParameters } from "./enterprisecrmfrontendseventbusprotoeventparameters";
import { EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata } from "./enterprisecrmeventbusprotoeventexecutionsnapshoteventexecutionsnapshotmetadata";
import { EnterpriseCrmEventbusProtoTaskExecutionDetails } from "./enterprisecrmeventbusprototaskexecutiondetails";



export class EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkpointTaskNumber" })
  checkpointTaskNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=conditionResults", elemType: EnterpriseCrmEventbusProtoConditionResult })
  conditionResults?: EnterpriseCrmEventbusProtoConditionResult[];

  @SpeakeasyMetadata({ data: "json, name=diffParams" })
  diffParams?: EnterpriseCrmFrontendsEventbusProtoEventParameters;

  @SpeakeasyMetadata({ data: "json, name=eventExecutionInfoId" })
  eventExecutionInfoId?: string;

  @SpeakeasyMetadata({ data: "json, name=eventExecutionSnapshotId" })
  eventExecutionSnapshotId?: string;

  @SpeakeasyMetadata({ data: "json, name=eventExecutionSnapshotMetadata" })
  eventExecutionSnapshotMetadata?: EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata;

  @SpeakeasyMetadata({ data: "json, name=eventParams" })
  eventParams?: EnterpriseCrmFrontendsEventbusProtoEventParameters;

  @SpeakeasyMetadata({ data: "json, name=snapshotTime" })
  snapshotTime?: string;

  @SpeakeasyMetadata({ data: "json, name=taskExecutionDetails", elemType: EnterpriseCrmEventbusProtoTaskExecutionDetails })
  taskExecutionDetails?: EnterpriseCrmEventbusProtoTaskExecutionDetails[];

  @SpeakeasyMetadata({ data: "json, name=taskName" })
  taskName?: string;
}
