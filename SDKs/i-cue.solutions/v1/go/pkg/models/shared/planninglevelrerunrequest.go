package shared

type PlanningLevelReRunRequestMethodEnum string

const (
	PlanningLevelReRunRequestMethodEnumAutoBestPick                            PlanningLevelReRunRequestMethodEnum = "AutoBestPick"
	PlanningLevelReRunRequestMethodEnumBoxJenkinsParameterized                 PlanningLevelReRunRequestMethodEnum = "BoxJenkinsParameterized"
	PlanningLevelReRunRequestMethodEnumBoxJenkins                              PlanningLevelReRunRequestMethodEnum = "BoxJenkins"
	PlanningLevelReRunRequestMethodEnumCrostonParameterized                    PlanningLevelReRunRequestMethodEnum = "CrostonParameterized"
	PlanningLevelReRunRequestMethodEnumCroston                                 PlanningLevelReRunRequestMethodEnum = "Croston"
	PlanningLevelReRunRequestMethodEnumDoubleExponentialSmoothingParameterized PlanningLevelReRunRequestMethodEnum = "DoubleExponentialSmoothingParameterized"
	PlanningLevelReRunRequestMethodEnumDoubleExponentialSmoothing              PlanningLevelReRunRequestMethodEnum = "DoubleExponentialSmoothing"
	PlanningLevelReRunRequestMethodEnumHoltWintersParameterized                PlanningLevelReRunRequestMethodEnum = "HoltWintersParameterized"
	PlanningLevelReRunRequestMethodEnumHoltWinters                             PlanningLevelReRunRequestMethodEnum = "HoltWinters"
	PlanningLevelReRunRequestMethodEnumSingleExponentialSmoothingParameterized PlanningLevelReRunRequestMethodEnum = "SingleExponentialSmoothingParameterized"
	PlanningLevelReRunRequestMethodEnumSingleExponentialSmoothing              PlanningLevelReRunRequestMethodEnum = "SingleExponentialSmoothing"
	PlanningLevelReRunRequestMethodEnumICue1Parameterized                      PlanningLevelReRunRequestMethodEnum = "iCUE1Parameterized"
	PlanningLevelReRunRequestMethodEnumICue1                                   PlanningLevelReRunRequestMethodEnum = "iCUE1"
	PlanningLevelReRunRequestMethodEnumICuEgamma                               PlanningLevelReRunRequestMethodEnum = "iCUEgamma"
	PlanningLevelReRunRequestMethodEnumSimpleMovingAverage                     PlanningLevelReRunRequestMethodEnum = "SimpleMovingAverage"
	PlanningLevelReRunRequestMethodEnumExternal                                PlanningLevelReRunRequestMethodEnum = "External"
	PlanningLevelReRunRequestMethodEnumICuEbeta                                PlanningLevelReRunRequestMethodEnum = "iCUEbeta"
)

type PlanningLevelReRunRequest struct {
	Method          PlanningLevelReRunRequestMethodEnum `json:"method"`
	Params          *PlanningLevelInfoRequest           `json:"params,omitempty"`
	PlanningLevelID int32                               `json:"planningLevelId"`
}
