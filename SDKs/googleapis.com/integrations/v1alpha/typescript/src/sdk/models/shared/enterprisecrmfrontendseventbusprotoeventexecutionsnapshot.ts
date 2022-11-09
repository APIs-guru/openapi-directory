import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnterpriseCrmEventbusProtoConditionResult } from "./enterprisecrmeventbusprotoconditionresult";
import { EnterpriseCrmFrontendsEventbusProtoEventParameters } from "./enterprisecrmfrontendseventbusprotoeventparameters";
import { EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata } from "./enterprisecrmeventbusprotoeventexecutionsnapshoteventexecutionsnapshotmetadata";
import { EnterpriseCrmFrontendsEventbusProtoEventParameters } from "./enterprisecrmfrontendseventbusprotoeventparameters";
import { EnterpriseCrmEventbusProtoTaskExecutionDetails } from "./enterprisecrmeventbusprototaskexecutiondetails";


export class EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkpointTaskNumber" })
  checkpointTaskNumber?: string;

  @Metadata({ data: "json, name=conditionResults", elemType: shared.EnterpriseCrmEventbusProtoConditionResult })
  conditionResults?: EnterpriseCrmEventbusProtoConditionResult[];

  @Metadata({ data: "json, name=diffParams" })
  diffParams?: EnterpriseCrmFrontendsEventbusProtoEventParameters;

  @Metadata({ data: "json, name=eventExecutionInfoId" })
  eventExecutionInfoId?: string;

  @Metadata({ data: "json, name=eventExecutionSnapshotId" })
  eventExecutionSnapshotId?: string;

  @Metadata({ data: "json, name=eventExecutionSnapshotMetadata" })
  eventExecutionSnapshotMetadata?: EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata;

  @Metadata({ data: "json, name=eventParams" })
  eventParams?: EnterpriseCrmFrontendsEventbusProtoEventParameters;

  @Metadata({ data: "json, name=snapshotTime" })
  snapshotTime?: string;

  @Metadata({ data: "json, name=taskExecutionDetails", elemType: shared.EnterpriseCrmEventbusProtoTaskExecutionDetails })
  taskExecutionDetails?: EnterpriseCrmEventbusProtoTaskExecutionDetails[];

  @Metadata({ data: "json, name=taskName" })
  taskName?: string;
}
