import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoConditionResult } from "./enterprisecrmeventbusprotoconditionresult";
import { EnterpriseCrmEventbusProtoEventParameters } from "./enterprisecrmeventbusprotoeventparameters";
import { EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata } from "./enterprisecrmeventbusprotoeventexecutionsnapshoteventexecutionsnapshotmetadata";
import { EnterpriseCrmEventbusProtoTaskExecutionDetails } from "./enterprisecrmeventbusprototaskexecutiondetails";



// EnterpriseCrmEventbusProtoEventExecutionSnapshot
/** 
 * Contains the snapshot of the event execution for a given checkpoint. Next available id: 13
**/
export class EnterpriseCrmEventbusProtoEventExecutionSnapshot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkpointTaskNumber" })
  checkpointTaskNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=conditionResults", elemType: EnterpriseCrmEventbusProtoConditionResult })
  conditionResults?: EnterpriseCrmEventbusProtoConditionResult[];

  @SpeakeasyMetadata({ data: "json, name=diffParams" })
  diffParams?: EnterpriseCrmEventbusProtoEventParameters;

  @SpeakeasyMetadata({ data: "json, name=eventExecutionInfoId" })
  eventExecutionInfoId?: string;

  @SpeakeasyMetadata({ data: "json, name=eventExecutionSnapshotId" })
  eventExecutionSnapshotId?: string;

  @SpeakeasyMetadata({ data: "json, name=eventExecutionSnapshotMetadata" })
  eventExecutionSnapshotMetadata?: EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata;

  @SpeakeasyMetadata({ data: "json, name=eventParams" })
  eventParams?: EnterpriseCrmEventbusProtoEventParameters;

  @SpeakeasyMetadata({ data: "json, name=exceedMaxSize" })
  exceedMaxSize?: boolean;

  @SpeakeasyMetadata({ data: "json, name=snapshotTime" })
  snapshotTime?: string;

  @SpeakeasyMetadata({ data: "json, name=taskExecutionDetails", elemType: EnterpriseCrmEventbusProtoTaskExecutionDetails })
  taskExecutionDetails?: EnterpriseCrmEventbusProtoTaskExecutionDetails[];

  @SpeakeasyMetadata({ data: "json, name=taskName" })
  taskName?: string;
}
