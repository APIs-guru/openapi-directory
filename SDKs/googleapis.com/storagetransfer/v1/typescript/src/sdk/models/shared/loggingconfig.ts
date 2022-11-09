import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LoggingConfigLogActionStatesEnum {
    LoggableActionStateUnspecified = "LOGGABLE_ACTION_STATE_UNSPECIFIED"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
}

export enum LoggingConfigLogActionsEnum {
    LoggableActionUnspecified = "LOGGABLE_ACTION_UNSPECIFIED"
,    Find = "FIND"
,    Delete = "DELETE"
,    Copy = "COPY"
}


// LoggingConfig
/** 
 * Specifies the logging behavior for transfer operations. For cloud-to-cloud transfers, logs are sent to Cloud Logging. See [Read transfer logs](https://cloud.google.com/storage-transfer/docs/read-transfer-logs) for details. For transfers to or from a POSIX file system, logs are stored in the Cloud Storage bucket that is the source or sink of the transfer. See [Managing Transfer for on-premises jobs] (https://cloud.google.com/storage-transfer/docs/managing-on-prem-jobs#viewing-logs) for details.
**/
export class LoggingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableOnpremGcsTransferLogs" })
  enableOnpremGcsTransferLogs?: boolean;

  @Metadata({ data: "json, name=logActionStates" })
  logActionStates?: LoggingConfigLogActionStatesEnum[];

  @Metadata({ data: "json, name=logActions" })
  logActions?: LoggingConfigLogActionsEnum[];
}
