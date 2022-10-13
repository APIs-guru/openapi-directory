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
	DiscardData      *bool                                  `json:"discardData"`
	ErrorType        *PlanningLevelInfoRequestErrorTypeEnum `json:"errorType"`
	HoldOutPeriod    *int32                                 `json:"holdOutPeriod"`
	NoFcst           *int32                                 `json:"noFcst"`
	OutlierDetection *bool                                  `json:"outlierDetection"`
	Periodicity      *int32                                 `json:"periodicity"`
}
