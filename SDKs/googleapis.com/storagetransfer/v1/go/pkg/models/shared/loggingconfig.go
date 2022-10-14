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

type LoggingConfig struct {
	EnableOnpremGcsTransferLogs *bool                              `json:"enableOnpremGcsTransferLogs,omitempty"`
	LogActionStates             []LoggingConfigLogActionStatesEnum `json:"logActionStates,omitempty"`
	LogActions                  []LoggingConfigLogActionsEnum      `json:"logActions,omitempty"`
}
