import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats } from "./enterprisecrmeventbusprotoeventexecutiondetailseventattemptstats";
import { EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot } from "./enterprisecrmfrontendseventbusprotoeventexecutionsnapshot";

export enum EnterpriseCrmFrontendsEventbusProtoEventExecutionDetailsEventExecutionStateEnum {
    Unspecified = "UNSPECIFIED"
,    OnHold = "ON_HOLD"
,    InProcess = "IN_PROCESS"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
,    Canceled = "CANCELED"
,    RetryOnHold = "RETRY_ON_HOLD"
,    Suspended = "SUSPENDED"
}


// EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails
/** 
 * Contains the details of the execution info of this event: this includes the tasks execution details plus the event execution statistics. Next available id: 10
**/
export class EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventAttemptStats", elemType: shared.EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats })
  eventAttemptStats?: EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats[];

  @Metadata({ data: "json, name=eventExecutionSnapshot", elemType: shared.EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot })
  eventExecutionSnapshot?: EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot[];

  @Metadata({ data: "json, name=eventExecutionState" })
  eventExecutionState?: EnterpriseCrmFrontendsEventbusProtoEventExecutionDetailsEventExecutionStateEnum;

  @Metadata({ data: "json, name=eventRetriesFromBeginningCount" })
  eventRetriesFromBeginningCount?: number;

  @Metadata({ data: "json, name=logFilePath" })
  logFilePath?: string;

  @Metadata({ data: "json, name=networkAddress" })
  networkAddress?: string;

  @Metadata({ data: "json, name=nextExecutionTime" })
  nextExecutionTime?: string;

  @Metadata({ data: "json, name=ryeLockUnheldCount" })
  ryeLockUnheldCount?: number;
}
