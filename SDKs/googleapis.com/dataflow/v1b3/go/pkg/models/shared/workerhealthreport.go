package shared

// WorkerHealthReport
// WorkerHealthReport contains information about the health of a worker. The VM should be identified by the labels attached to the WorkerMessage that this health ping belongs to.
type WorkerHealthReport struct {
	Msg            *string                  `json:"msg,omitempty"`
	Pods           []map[string]interface{} `json:"pods,omitempty"`
	ReportInterval *string                  `json:"reportInterval,omitempty"`
	VMBrokenCode   *string                  `json:"vmBrokenCode,omitempty"`
	VMIsBroken     *bool                    `json:"vmIsBroken,omitempty"`
	VMIsHealthy    *bool                    `json:"vmIsHealthy,omitempty"`
	VMStartupTime  *string                  `json:"vmStartupTime,omitempty"`
}
