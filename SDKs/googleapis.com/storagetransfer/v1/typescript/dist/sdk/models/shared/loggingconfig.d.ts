import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LoggingConfigLogActionStatesEnum {
    LoggableActionStateUnspecified = "LOGGABLE_ACTION_STATE_UNSPECIFIED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
export declare enum LoggingConfigLogActionsEnum {
    LoggableActionUnspecified = "LOGGABLE_ACTION_UNSPECIFIED",
    Find = "FIND",
    Delete = "DELETE",
    Copy = "COPY"
}
/**
 * Specifies the logging behavior for transfer operations. For cloud-to-cloud transfers, logs are sent to Cloud Logging. See [Read transfer logs](https://cloud.google.com/storage-transfer/docs/read-transfer-logs) for details. For transfers to or from a POSIX file system, logs are stored in the Cloud Storage bucket that is the source or sink of the transfer. See [Managing Transfer for on-premises jobs] (https://cloud.google.com/storage-transfer/docs/managing-on-prem-jobs#viewing-logs) for details.
**/
export declare class LoggingConfig extends SpeakeasyBase {
    enableOnpremGcsTransferLogs?: boolean;
    logActionStates?: LoggingConfigLogActionStatesEnum[];
    logActions?: LoggingConfigLogActionsEnum[];
}
