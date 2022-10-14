package shared

type PlanningLevelHyperparameterResponseErrorTypeEnum string

const (
	PlanningLevelHyperparameterResponseErrorTypeEnumMeanAbsolutePercentageError PlanningLevelHyperparameterResponseErrorTypeEnum = "MeanAbsolutePercentageError"
	PlanningLevelHyperparameterResponseErrorTypeEnumMeanSquaredError            PlanningLevelHyperparameterResponseErrorTypeEnum = "MeanSquaredError"
	PlanningLevelHyperparameterResponseErrorTypeEnumMeanAbsoluteError           PlanningLevelHyperparameterResponseErrorTypeEnum = "MeanAbsoluteError"
	PlanningLevelHyperparameterResponseErrorTypeEnumMedianAbsoluteDeviation     PlanningLevelHyperparameterResponseErrorTypeEnum = "MedianAbsoluteDeviation"
	PlanningLevelHyperparameterResponseErrorTypeEnumNone                        PlanningLevelHyperparameterResponseErrorTypeEnum = "None"
)

type PlanningLevelHyperparameterResponse struct {
	DiscardData   *bool                                             `json:"discardData,omitempty"`
	ErrorType     *PlanningLevelHyperparameterResponseErrorTypeEnum `json:"errorType,omitempty"`
	HoldOutPeriod *int32                                            `json:"holdOutPeriod,omitempty"`
	NoFcst        *int32                                            `json:"noFcst,omitempty"`
	Periodicity   *int32                                            `json:"periodicity,omitempty"`
}
