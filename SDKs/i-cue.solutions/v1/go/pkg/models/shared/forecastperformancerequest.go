package shared

type ForecastPerformanceRequestMethodEnum string

const (
	ForecastPerformanceRequestMethodEnumAutoBestPick                            ForecastPerformanceRequestMethodEnum = "AutoBestPick"
	ForecastPerformanceRequestMethodEnumBoxJenkinsParameterized                 ForecastPerformanceRequestMethodEnum = "BoxJenkinsParameterized"
	ForecastPerformanceRequestMethodEnumBoxJenkins                              ForecastPerformanceRequestMethodEnum = "BoxJenkins"
	ForecastPerformanceRequestMethodEnumCrostonParameterized                    ForecastPerformanceRequestMethodEnum = "CrostonParameterized"
	ForecastPerformanceRequestMethodEnumCroston                                 ForecastPerformanceRequestMethodEnum = "Croston"
	ForecastPerformanceRequestMethodEnumDoubleExponentialSmoothingParameterized ForecastPerformanceRequestMethodEnum = "DoubleExponentialSmoothingParameterized"
	ForecastPerformanceRequestMethodEnumDoubleExponentialSmoothing              ForecastPerformanceRequestMethodEnum = "DoubleExponentialSmoothing"
	ForecastPerformanceRequestMethodEnumHoltWintersParameterized                ForecastPerformanceRequestMethodEnum = "HoltWintersParameterized"
	ForecastPerformanceRequestMethodEnumHoltWinters                             ForecastPerformanceRequestMethodEnum = "HoltWinters"
	ForecastPerformanceRequestMethodEnumSingleExponentialSmoothingParameterized ForecastPerformanceRequestMethodEnum = "SingleExponentialSmoothingParameterized"
	ForecastPerformanceRequestMethodEnumSingleExponentialSmoothing              ForecastPerformanceRequestMethodEnum = "SingleExponentialSmoothing"
	ForecastPerformanceRequestMethodEnumICue1Parameterized                      ForecastPerformanceRequestMethodEnum = "iCUE1Parameterized"
	ForecastPerformanceRequestMethodEnumICue1                                   ForecastPerformanceRequestMethodEnum = "iCUE1"
	ForecastPerformanceRequestMethodEnumICuEgamma                               ForecastPerformanceRequestMethodEnum = "iCUEgamma"
	ForecastPerformanceRequestMethodEnumSimpleMovingAverage                     ForecastPerformanceRequestMethodEnum = "SimpleMovingAverage"
	ForecastPerformanceRequestMethodEnumExternal                                ForecastPerformanceRequestMethodEnum = "External"
	ForecastPerformanceRequestMethodEnumICuEbeta                                ForecastPerformanceRequestMethodEnum = "iCUEbeta"
)

type ForecastPerformanceRequest struct {
	CostOfError     *float64                             `json:"costOfError,omitempty"`
	Data            []ForecastPerformanceDataRequest     `json:"data,omitempty"`
	Method          ForecastPerformanceRequestMethodEnum `json:"method"`
	Params          *PlanningLevelInfoRequest            `json:"params,omitempty"`
	PlanningLevelID string                               `json:"planningLevelId"`
	RewindTimeFrame int32                                `json:"rewindTimeFrame"`
	StartDate       string                               `json:"startDate"`
}
