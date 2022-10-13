package shared

type ForecastHyperparameterResponseErrorTypeEnum string

const (
	ForecastHyperparameterResponseErrorTypeEnumMeanAbsolutePercentageError ForecastHyperparameterResponseErrorTypeEnum = "MeanAbsolutePercentageError"
	ForecastHyperparameterResponseErrorTypeEnumMeanSquaredError            ForecastHyperparameterResponseErrorTypeEnum = "MeanSquaredError"
	ForecastHyperparameterResponseErrorTypeEnumMeanAbsoluteError           ForecastHyperparameterResponseErrorTypeEnum = "MeanAbsoluteError"
	ForecastHyperparameterResponseErrorTypeEnumMedianAbsoluteDeviation     ForecastHyperparameterResponseErrorTypeEnum = "MedianAbsoluteDeviation"
	ForecastHyperparameterResponseErrorTypeEnumNone                        ForecastHyperparameterResponseErrorTypeEnum = "None"
)

type ForecastHyperparameterResponse struct {
	DiscardData   *bool                                        `json:"discardData"`
	ErrorType     *ForecastHyperparameterResponseErrorTypeEnum `json:"errorType"`
	HoldOutPeriod *int32                                       `json:"holdOutPeriod"`
	NoFcst        *int32                                       `json:"noFcst"`
	Periodicity   *int32                                       `json:"periodicity"`
}
