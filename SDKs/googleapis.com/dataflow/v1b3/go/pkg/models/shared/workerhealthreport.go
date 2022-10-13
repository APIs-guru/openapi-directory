package shared

type WorkerHealthReport struct {
	Msg            *string                  `json:"msg"`
	Pods           []map[string]interface{} `json:"pods"`
	ReportInterval *string                  `json:"reportInterval"`
	VMBrokenCode   *string                  `json:"vmBrokenCode"`
	VMIsBroken     *bool                    `json:"vmIsBroken"`
	VMIsHealthy    *bool                    `json:"vmIsHealthy"`
	VMStartupTime  *string                  `json:"vmStartupTime"`
}
