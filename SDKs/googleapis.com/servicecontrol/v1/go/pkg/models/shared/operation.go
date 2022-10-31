package shared




type OperationImportanceEnum string

const (
    OperationImportanceEnumLow OperationImportanceEnum = "LOW"
OperationImportanceEnumHigh OperationImportanceEnum = "HIGH"
OperationImportanceEnumDebug OperationImportanceEnum = "DEBUG"
)


type Operation struct {
    ConsumerID *string `json:"consumerId,omitempty"`
    EndTime *string `json:"endTime,omitempty"`
    Importance *OperationImportanceEnum `json:"importance,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    LogEntries []LogEntry `json:"logEntries,omitempty"`
    MetricValueSets []MetricValueSet `json:"metricValueSets,omitempty"`
    OperationID *string `json:"operationId,omitempty"`
    OperationName *string `json:"operationName,omitempty"`
    QuotaProperties *QuotaProperties `json:"quotaProperties,omitempty"`
    Resources []ResourceInfo `json:"resources,omitempty"`
    StartTime *string `json:"startTime,omitempty"`
    TraceSpans []TraceSpan `json:"traceSpans,omitempty"`
    UserLabels map[string]string `json:"userLabels,omitempty"`
    
}

