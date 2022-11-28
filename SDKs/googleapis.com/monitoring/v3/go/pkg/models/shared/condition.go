package shared

// Condition
// A condition is a true/false test that determines when an alerting policy should open an incident. If a condition evaluates to true, it signifies that something is wrong.
type Condition struct {
	ConditionAbsent                  *MetricAbsence                    `json:"conditionAbsent,omitempty"`
	ConditionMatchedLog              *LogMatch                         `json:"conditionMatchedLog,omitempty"`
	ConditionMonitoringQueryLanguage *MonitoringQueryLanguageCondition `json:"conditionMonitoringQueryLanguage,omitempty"`
	ConditionThreshold               *MetricThreshold                  `json:"conditionThreshold,omitempty"`
	DisplayName                      *string                           `json:"displayName,omitempty"`
	Name                             *string                           `json:"name,omitempty"`
}
