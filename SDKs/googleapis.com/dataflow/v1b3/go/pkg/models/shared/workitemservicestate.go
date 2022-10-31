package shared

type WorkItemServiceState struct {
	CompleteWorkStatus    *Status                  `json:"completeWorkStatus,omitempty"`
	HarnessData           map[string]interface{}   `json:"harnessData,omitempty"`
	HotKeyDetection       *HotKeyDetection         `json:"hotKeyDetection,omitempty"`
	LeaseExpireTime       *string                  `json:"leaseExpireTime,omitempty"`
	MetricShortID         []MetricShortID          `json:"metricShortId,omitempty"`
	NextReportIndex       *string                  `json:"nextReportIndex,omitempty"`
	ReportStatusInterval  *string                  `json:"reportStatusInterval,omitempty"`
	SplitRequest          *ApproximateSplitRequest `json:"splitRequest,omitempty"`
	SuggestedStopPoint    *ApproximateProgress     `json:"suggestedStopPoint,omitempty"`
	SuggestedStopPosition *Position                `json:"suggestedStopPosition,omitempty"`
}
