package shared

type WorkItemServiceState struct {
	CompleteWorkStatus    *Status                  `json:"completeWorkStatus"`
	HarnessData           map[string]interface{}   `json:"harnessData"`
	HotKeyDetection       *HotKeyDetection         `json:"hotKeyDetection"`
	LeaseExpireTime       *string                  `json:"leaseExpireTime"`
	MetricShortID         []MetricShortID          `json:"metricShortId"`
	NextReportIndex       *string                  `json:"nextReportIndex"`
	ReportStatusInterval  *string                  `json:"reportStatusInterval"`
	SplitRequest          *ApproximateSplitRequest `json:"splitRequest"`
	SuggestedStopPoint    *ApproximateProgress     `json:"suggestedStopPoint"`
	SuggestedStopPosition *Position                `json:"suggestedStopPosition"`
}
