import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats } from "./enterprisecrmeventbusprotoeventexecutiondetailseventattemptstats";
import { EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot } from "./enterprisecrmfrontendseventbusprotoeventexecutionsnapshot";


export enum EnterpriseCrmFrontendsEventbusProtoEventExecutionDetailsEventExecutionStateEnum {
    Unspecified = "UNSPECIFIED",
    OnHold = "ON_HOLD",
    InProcess = "IN_PROCESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Canceled = "CANCELED",
    RetryOnHold = "RETRY_ON_HOLD",
    Suspended = "SUSPENDED"
}


// EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails
/** 
 * Contains the details of the execution info of this event: this includes the tasks execution details plus the event execution statistics. Next available id: 10
**/
export class EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventAttemptStats", elemType: EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats })
  eventAttemptStats?: EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats[];

  @SpeakeasyMetadata({ data: "json, name=eventExecutionSnapshot", elemType: EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot })
  eventExecutionSnapshot?: EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot[];

  @SpeakeasyMetadata({ data: "json, name=eventExecutionState" })
  eventExecutionState?: EnterpriseCrmFrontendsEventbusProtoEventExecutionDetailsEventExecutionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=eventRetriesFromBeginningCount" })
  eventRetriesFromBeginningCount?: number;

  @SpeakeasyMetadata({ data: "json, name=logFilePath" })
  logFilePath?: string;

  @SpeakeasyMetadata({ data: "json, name=networkAddress" })
  networkAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=nextExecutionTime" })
  nextExecutionTime?: string;

  @SpeakeasyMetadata({ data: "json, name=ryeLockUnheldCount" })
  ryeLockUnheldCount?: number;
}
