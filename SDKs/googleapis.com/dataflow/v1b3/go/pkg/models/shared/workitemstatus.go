package shared

type WorkItemStatus struct {
	Completed                     *bool                        `json:"completed"`
	CounterUpdates                []CounterUpdate              `json:"counterUpdates"`
	DynamicSourceSplit            *DynamicSourceSplit          `json:"dynamicSourceSplit"`
	Errors                        []Status                     `json:"errors"`
	MetricUpdates                 []MetricUpdate               `json:"metricUpdates"`
	Progress                      *ApproximateProgress         `json:"progress"`
	ReportIndex                   *string                      `json:"reportIndex"`
	ReportedProgress              *ApproximateReportedProgress `json:"reportedProgress"`
	RequestedLeaseDuration        *string                      `json:"requestedLeaseDuration"`
	SourceFork                    *SourceFork                  `json:"sourceFork"`
	SourceOperationResponse       *SourceOperationResponse     `json:"sourceOperationResponse"`
	StopPosition                  *Position                    `json:"stopPosition"`
	TotalThrottlerWaitTimeSeconds *float64                     `json:"totalThrottlerWaitTimeSeconds"`
	WorkItemID                    *string                      `json:"workItemId"`
}
