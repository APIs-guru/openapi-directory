package shared

type GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum string

const (
	GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnumStateUnspecified GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnumPending          GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum = "PENDING"
	GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnumProcessing       GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum = "PROCESSING"
	GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnumSucceeded        GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum = "SUCCEEDED"
	GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnumFailed           GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum = "FAILED"
	GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnumCancelled        GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum = "CANCELLED"
	GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnumRetryOnHold      GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum = "RETRY_ON_HOLD"
	GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnumSuspended        GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum = "SUSPENDED"
)

// GoogleCloudIntegrationsV1alphaExecutionDetails
// Contains the details of the execution info: this includes the tasks execution details plus the event execution statistics.
type GoogleCloudIntegrationsV1alphaExecutionDetails struct {
	AttemptStats       []GoogleCloudIntegrationsV1alphaAttemptStats             `json:"attemptStats,omitempty"`
	ExecutionSnapshots []GoogleCloudIntegrationsV1alphaExecutionSnapshot        `json:"executionSnapshots,omitempty"`
	State              *GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum `json:"state,omitempty"`
}
