package shared

type PlanningLevelInfoRequestErrorTypeEnum string

const (
	PlanningLevelInfoRequestErrorTypeEnumMeanAbsolutePercentageError PlanningLevelInfoRequestErrorTypeEnum = "MeanAbsolutePercentageError"
	PlanningLevelInfoRequestErrorTypeEnumMeanSquaredError            PlanningLevelInfoRequestErrorTypeEnum = "MeanSquaredError"
	PlanningLevelInfoRequestErrorTypeEnumMeanAbsoluteError           PlanningLevelInfoRequestErrorTypeEnum = "MeanAbsoluteError"
	PlanningLevelInfoRequestErrorTypeEnumMedianAbsoluteDeviation     PlanningLevelInfoRequestErrorTypeEnum = "MedianAbsoluteDeviation"
	PlanningLevelInfoRequestErrorTypeEnumNone                        PlanningLevelInfoRequestErrorTypeEnum = "None"
)

type PlanningLevelInfoRequest struct {
	DiscardData      *bool                                  `json:"discardData,omitempty"`
	ErrorType        *PlanningLevelInfoRequestErrorTypeEnum `json:"errorType,omitempty"`
	HoldOutPeriod    *int32                                 `json:"holdOutPeriod,omitempty"`
	NoFcst           *int32                                 `json:"noFcst,omitempty"`
	OutlierDetection *bool                                  `json:"outlierDetection,omitempty"`
	Periodicity      *int32                                 `json:"periodicity,omitempty"`
}
