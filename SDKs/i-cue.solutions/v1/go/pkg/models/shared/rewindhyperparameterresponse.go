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
	CostOfError     *float64                                   `json:"costOfError"`
	DiscardData     *bool                                      `json:"discardData"`
	ErrorType       *RewindHyperparameterResponseErrorTypeEnum `json:"errorType"`
	HoldOutPeriod   *int32                                     `json:"holdOutPeriod"`
	NoFcst          *int32                                     `json:"noFcst"`
	Periodicity     *int32                                     `json:"periodicity"`
	RewindTimeFrame *int32                                     `json:"rewindTimeFrame"`
}
