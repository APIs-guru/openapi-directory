package shared

type Condition struct {
	ConditionAbsent                  *MetricAbsence                    `json:"conditionAbsent"`
	ConditionMatchedLog              *LogMatch                         `json:"conditionMatchedLog"`
	ConditionMonitoringQueryLanguage *MonitoringQueryLanguageCondition `json:"conditionMonitoringQueryLanguage"`
	ConditionThreshold               *MetricThreshold                  `json:"conditionThreshold"`
	DisplayName                      *string                           `json:"displayName"`
	Name                             *string                           `json:"name"`
}
