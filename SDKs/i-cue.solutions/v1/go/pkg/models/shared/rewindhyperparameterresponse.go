package shared

type RewindHyperparameterResponseErrorTypeEnum string

const (
	RewindHyperparameterResponseErrorTypeEnumMeanAbsolutePercentageError RewindHyperparameterResponseErrorTypeEnum = "MeanAbsolutePercentageError"
	RewindHyperparameterResponseErrorTypeEnumMeanSquaredError            RewindHyperparameterResponseErrorTypeEnum = "MeanSquaredError"
	RewindHyperparameterResponseErrorTypeEnumMeanAbsoluteError           RewindHyperparameterResponseErrorTypeEnum = "MeanAbsoluteError"
	RewindHyperparameterResponseErrorTypeEnumMedianAbsoluteDeviation     RewindHyperparameterResponseErrorTypeEnum = "MedianAbsoluteDeviation"
	RewindHyperparameterResponseErrorTypeEnumNone                        RewindHyperparameterResponseErrorTypeEnum = "None"
)

type RewindHyperparameterResponse struct {
	CostOfError     *float64                                   `json:"costOfError,omitempty"`
	DiscardData     *bool                                      `json:"discardData,omitempty"`
	ErrorType       *RewindHyperparameterResponseErrorTypeEnum `json:"errorType,omitempty"`
	HoldOutPeriod   *int32                                     `json:"holdOutPeriod,omitempty"`
	NoFcst          *int32                                     `json:"noFcst,omitempty"`
	Periodicity     *int32                                     `json:"periodicity,omitempty"`
	RewindTimeFrame *int32                                     `json:"rewindTimeFrame,omitempty"`
}
