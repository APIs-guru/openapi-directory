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
	DiscardData   *bool                                             `json:"discardData"`
	ErrorType     *PlanningLevelHyperparameterResponseErrorTypeEnum `json:"errorType"`
	HoldOutPeriod *int32                                            `json:"holdOutPeriod"`
	NoFcst        *int32                                            `json:"noFcst"`
	Periodicity   *int32                                            `json:"periodicity"`
}
