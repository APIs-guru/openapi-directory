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
	AbcClassificationThresholdA *float64                          `json:"abcClassificationThresholdA,omitempty"`
	AbcClassificationThresholdB *float64                          `json:"abcClassificationThresholdB,omitempty"`
	AbcClassificationThresholdC *float64                          `json:"abcClassificationThresholdC,omitempty"`
	DiscardData                 *bool                             `json:"discardData,omitempty"`
	ErrorType                   *HyperparameterModelErrorTypeEnum `json:"errorType,omitempty"`
	HoldOutPeriod               *int32                            `json:"holdOutPeriod,omitempty"`
	NoFcst                      *int32                            `json:"noFcst,omitempty"`
	OutlierDetection            *bool                             `json:"outlierDetection,omitempty"`
	Periodicity                 *int32                            `json:"periodicity,omitempty"`
	XyzClassificationThresholdX *float64                          `json:"xyzClassificationThresholdX,omitempty"`
	XyzClassificationThresholdY *float64                          `json:"xyzClassificationThresholdY,omitempty"`
	XyzClassificationThresholdZ *float64                          `json:"xyzClassificationThresholdZ,omitempty"`
}
