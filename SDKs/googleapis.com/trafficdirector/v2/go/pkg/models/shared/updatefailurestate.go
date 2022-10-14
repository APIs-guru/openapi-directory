package shared

type UpdateFailureState struct {
	Details             *string                `json:"details,omitempty"`
	FailedConfiguration map[string]interface{} `json:"failedConfiguration,omitempty"`
	LastUpdateAttempt   *string                `json:"lastUpdateAttempt,omitempty"`
}
