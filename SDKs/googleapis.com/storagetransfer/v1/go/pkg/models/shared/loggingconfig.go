package shared

type LoggingConfigLogActionStatesEnum string

const (
	LoggingConfigLogActionStatesEnumLoggableActionStateUnspecified LoggingConfigLogActionStatesEnum = "LOGGABLE_ACTION_STATE_UNSPECIFIED"
	LoggingConfigLogActionStatesEnumSucceeded                      LoggingConfigLogActionStatesEnum = "SUCCEEDED"
	LoggingConfigLogActionStatesEnumFailed                         LoggingConfigLogActionStatesEnum = "FAILED"
)

type LoggingConfigLogActionsEnum string

const (
	LoggingConfigLogActionsEnumLoggableActionUnspecified LoggingConfigLogActionsEnum = "LOGGABLE_ACTION_UNSPECIFIED"
	LoggingConfigLogActionsEnumFind                      LoggingConfigLogActionsEnum = "FIND"
	LoggingConfigLogActionsEnumDelete                    LoggingConfigLogActionsEnum = "DELETE"
	LoggingConfigLogActionsEnumCopy                      LoggingConfigLogActionsEnum = "COPY"
)

// LoggingConfig
// Specifies the logging behavior for transfer operations. For cloud-to-cloud transfers, logs are sent to Cloud Logging. See [Read transfer logs](https://cloud.google.com/storage-transfer/docs/read-transfer-logs) for details. For transfers to or from a POSIX file system, logs are stored in the Cloud Storage bucket that is the source or sink of the transfer. See [Managing Transfer for on-premises jobs] (https://cloud.google.com/storage-transfer/docs/managing-on-prem-jobs#viewing-logs) for details.
type LoggingConfig struct {
	EnableOnpremGcsTransferLogs *bool                              `json:"enableOnpremGcsTransferLogs,omitempty"`
	LogActionStates             []LoggingConfigLogActionStatesEnum `json:"logActionStates,omitempty"`
	LogActions                  []LoggingConfigLogActionsEnum      `json:"logActions,omitempty"`
}
