package shared

type WorkerHealthReport struct {
	Msg            *string                  `json:"msg,omitempty"`
	Pods           []map[string]interface{} `json:"pods,omitempty"`
	ReportInterval *string                  `json:"reportInterval,omitempty"`
	VMBrokenCode   *string                  `json:"vmBrokenCode,omitempty"`
	VMIsBroken     *bool                    `json:"vmIsBroken,omitempty"`
	VMIsHealthy    *bool                    `json:"vmIsHealthy,omitempty"`
	VMStartupTime  *string                  `json:"vmStartupTime,omitempty"`
}
