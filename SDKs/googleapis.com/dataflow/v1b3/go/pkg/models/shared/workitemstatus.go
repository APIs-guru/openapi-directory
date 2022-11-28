package shared

// WorkItemStatus
// Conveys a worker's progress through the work described by a WorkItem.
type WorkItemStatus struct {
	Completed                     *bool                        `json:"completed,omitempty"`
	CounterUpdates                []CounterUpdate              `json:"counterUpdates,omitempty"`
	DynamicSourceSplit            *DynamicSourceSplit          `json:"dynamicSourceSplit,omitempty"`
	Errors                        []Status                     `json:"errors,omitempty"`
	MetricUpdates                 []MetricUpdate               `json:"metricUpdates,omitempty"`
	Progress                      *ApproximateProgress         `json:"progress,omitempty"`
	ReportIndex                   *string                      `json:"reportIndex,omitempty"`
	ReportedProgress              *ApproximateReportedProgress `json:"reportedProgress,omitempty"`
	RequestedLeaseDuration        *string                      `json:"requestedLeaseDuration,omitempty"`
	SourceFork                    *SourceFork                  `json:"sourceFork,omitempty"`
	SourceOperationResponse       *SourceOperationResponse     `json:"sourceOperationResponse,omitempty"`
	StopPosition                  *Position                    `json:"stopPosition,omitempty"`
	TotalThrottlerWaitTimeSeconds *float64                     `json:"totalThrottlerWaitTimeSeconds,omitempty"`
	WorkItemID                    *string                      `json:"workItemId,omitempty"`
}
