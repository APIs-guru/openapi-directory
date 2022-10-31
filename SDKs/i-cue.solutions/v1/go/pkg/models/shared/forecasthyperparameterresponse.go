package shared




type ForecastHyperparameterResponseErrorTypeEnum string

const (
    ForecastHyperparameterResponseErrorTypeEnumMeanAbsolutePercentageError ForecastHyperparameterResponseErrorTypeEnum = "MeanAbsolutePercentageError"
ForecastHyperparameterResponseErrorTypeEnumMeanSquaredError ForecastHyperparameterResponseErrorTypeEnum = "MeanSquaredError"
ForecastHyperparameterResponseErrorTypeEnumMeanAbsoluteError ForecastHyperparameterResponseErrorTypeEnum = "MeanAbsoluteError"
ForecastHyperparameterResponseErrorTypeEnumMedianAbsoluteDeviation ForecastHyperparameterResponseErrorTypeEnum = "MedianAbsoluteDeviation"
ForecastHyperparameterResponseErrorTypeEnumNone ForecastHyperparameterResponseErrorTypeEnum = "None"
)


type ForecastHyperparameterResponse struct {
    DiscardData *bool `json:"discardData,omitempty"`
    ErrorType *ForecastHyperparameterResponseErrorTypeEnum `json:"errorType,omitempty"`
    HoldOutPeriod *int32 `json:"holdOutPeriod,omitempty"`
    NoFcst *int32 `json:"noFcst,omitempty"`
    Periodicity *int32 `json:"periodicity,omitempty"`
    
}

