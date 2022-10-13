package shared

type HyperparameterModelErrorTypeEnum string

const (
	HyperparameterModelErrorTypeEnumMeanAbsolutePercentageError HyperparameterModelErrorTypeEnum = "MeanAbsolutePercentageError"
	HyperparameterModelErrorTypeEnumMeanSquaredError            HyperparameterModelErrorTypeEnum = "MeanSquaredError"
	HyperparameterModelErrorTypeEnumMeanAbsoluteError           HyperparameterModelErrorTypeEnum = "MeanAbsoluteError"
	HyperparameterModelErrorTypeEnumMedianAbsoluteDeviation     HyperparameterModelErrorTypeEnum = "MedianAbsoluteDeviation"
	HyperparameterModelErrorTypeEnumNone                        HyperparameterModelErrorTypeEnum = "None"
)

type HyperparameterModel struct {
	AbcClassificationThresholdA *float64                          `json:"abcClassificationThresholdA"`
	AbcClassificationThresholdB *float64                          `json:"abcClassificationThresholdB"`
	AbcClassificationThresholdC *float64                          `json:"abcClassificationThresholdC"`
	DiscardData                 *bool                             `json:"discardData"`
	ErrorType                   *HyperparameterModelErrorTypeEnum `json:"errorType"`
	HoldOutPeriod               *int32                            `json:"holdOutPeriod"`
	NoFcst                      *int32                            `json:"noFcst"`
	OutlierDetection            *bool                             `json:"outlierDetection"`
	Periodicity                 *int32                            `json:"periodicity"`
	XyzClassificationThresholdX *float64                          `json:"xyzClassificationThresholdX"`
	XyzClassificationThresholdY *float64                          `json:"xyzClassificationThresholdY"`
	XyzClassificationThresholdZ *float64                          `json:"xyzClassificationThresholdZ"`
}
