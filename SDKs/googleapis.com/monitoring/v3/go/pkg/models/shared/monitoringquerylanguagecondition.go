package shared




type MonitoringQueryLanguageConditionEvaluationMissingDataEnum string

const (
    MonitoringQueryLanguageConditionEvaluationMissingDataEnumEvaluationMissingDataUnspecified MonitoringQueryLanguageConditionEvaluationMissingDataEnum = "EVALUATION_MISSING_DATA_UNSPECIFIED"
MonitoringQueryLanguageConditionEvaluationMissingDataEnumEvaluationMissingDataInactive MonitoringQueryLanguageConditionEvaluationMissingDataEnum = "EVALUATION_MISSING_DATA_INACTIVE"
MonitoringQueryLanguageConditionEvaluationMissingDataEnumEvaluationMissingDataActive MonitoringQueryLanguageConditionEvaluationMissingDataEnum = "EVALUATION_MISSING_DATA_ACTIVE"
MonitoringQueryLanguageConditionEvaluationMissingDataEnumEvaluationMissingDataNoOp MonitoringQueryLanguageConditionEvaluationMissingDataEnum = "EVALUATION_MISSING_DATA_NO_OP"
)


type MonitoringQueryLanguageCondition struct {
    Duration *string `json:"duration,omitempty"`
    EvaluationMissingData *MonitoringQueryLanguageConditionEvaluationMissingDataEnum `json:"evaluationMissingData,omitempty"`
    Query *string `json:"query,omitempty"`
    Trigger *Trigger `json:"trigger,omitempty"`
    
}

