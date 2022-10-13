package shared

type OperationImportanceEnum string

const (
	OperationImportanceEnumLow   OperationImportanceEnum = "LOW"
	OperationImportanceEnumHigh  OperationImportanceEnum = "HIGH"
	OperationImportanceEnumDebug OperationImportanceEnum = "DEBUG"
)

type Operation struct {
	ConsumerID      *string                  `json:"consumerId"`
	EndTime         *string                  `json:"endTime"`
	Importance      *OperationImportanceEnum `json:"importance"`
	Labels          map[string]string        `json:"labels"`
	LogEntries      []LogEntry               `json:"logEntries"`
	MetricValueSets []MetricValueSet         `json:"metricValueSets"`
	OperationID     *string                  `json:"operationId"`
	OperationName   *string                  `json:"operationName"`
	QuotaProperties *QuotaProperties         `json:"quotaProperties"`
	Resources       []ResourceInfo           `json:"resources"`
	StartTime       *string                  `json:"startTime"`
	TraceSpans      []TraceSpan              `json:"traceSpans"`
	UserLabels      map[string]string        `json:"userLabels"`
}
