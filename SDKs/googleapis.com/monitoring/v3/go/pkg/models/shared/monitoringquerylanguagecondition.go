package shared

type MonitoringQueryLanguageConditionEvaluationMissingDataEnum string

const (
	MonitoringQueryLanguageConditionEvaluationMissingDataEnumEvaluationMissingDataUnspecified MonitoringQueryLanguageConditionEvaluationMissingDataEnum = "EVALUATION_MISSING_DATA_UNSPECIFIED"
	MonitoringQueryLanguageConditionEvaluationMissingDataEnumEvaluationMissingDataInactive    MonitoringQueryLanguageConditionEvaluationMissingDataEnum = "EVALUATION_MISSING_DATA_INACTIVE"
	MonitoringQueryLanguageConditionEvaluationMissingDataEnumEvaluationMissingDataActive      MonitoringQueryLanguageConditionEvaluationMissingDataEnum = "EVALUATION_MISSING_DATA_ACTIVE"
	MonitoringQueryLanguageConditionEvaluationMissingDataEnumEvaluationMissingDataNoOp        MonitoringQueryLanguageConditionEvaluationMissingDataEnum = "EVALUATION_MISSING_DATA_NO_OP"
)

type MonitoringQueryLanguageCondition struct {
	Duration              *string                                                    `json:"duration"`
	EvaluationMissingData *MonitoringQueryLanguageConditionEvaluationMissingDataEnum `json:"evaluationMissingData"`
	Query                 *string                                                    `json:"query"`
	Trigger               *Trigger                                                   `json:"trigger"`
}
