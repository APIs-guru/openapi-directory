package shared

type UpdateFailureState struct {
	Details             *string                `json:"details"`
	FailedConfiguration map[string]interface{} `json:"failedConfiguration"`
	LastUpdateAttempt   *string                `json:"lastUpdateAttempt"`
}
