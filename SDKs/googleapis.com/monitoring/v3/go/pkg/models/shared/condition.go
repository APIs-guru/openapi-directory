package shared

type Condition struct {
	ConditionAbsent                  *MetricAbsence                    `json:"conditionAbsent,omitempty"`
	ConditionMatchedLog              *LogMatch                         `json:"conditionMatchedLog,omitempty"`
	ConditionMonitoringQueryLanguage *MonitoringQueryLanguageCondition `json:"conditionMonitoringQueryLanguage,omitempty"`
	ConditionThreshold               *MetricThreshold                  `json:"conditionThreshold,omitempty"`
	DisplayName                      *string                           `json:"displayName,omitempty"`
	Name                             *string                           `json:"name,omitempty"`
}
