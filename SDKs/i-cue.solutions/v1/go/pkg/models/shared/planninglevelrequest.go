package shared




type PlanningLevelRequestMethodEnum string

const (
    PlanningLevelRequestMethodEnumAutoBestPick PlanningLevelRequestMethodEnum = "AutoBestPick"
PlanningLevelRequestMethodEnumBoxJenkinsParameterized PlanningLevelRequestMethodEnum = "BoxJenkinsParameterized"
PlanningLevelRequestMethodEnumBoxJenkins PlanningLevelRequestMethodEnum = "BoxJenkins"
PlanningLevelRequestMethodEnumCrostonParameterized PlanningLevelRequestMethodEnum = "CrostonParameterized"
PlanningLevelRequestMethodEnumCroston PlanningLevelRequestMethodEnum = "Croston"
PlanningLevelRequestMethodEnumDoubleExponentialSmoothingParameterized PlanningLevelRequestMethodEnum = "DoubleExponentialSmoothingParameterized"
PlanningLevelRequestMethodEnumDoubleExponentialSmoothing PlanningLevelRequestMethodEnum = "DoubleExponentialSmoothing"
PlanningLevelRequestMethodEnumHoltWintersParameterized PlanningLevelRequestMethodEnum = "HoltWintersParameterized"
PlanningLevelRequestMethodEnumHoltWinters PlanningLevelRequestMethodEnum = "HoltWinters"
PlanningLevelRequestMethodEnumSingleExponentialSmoothingParameterized PlanningLevelRequestMethodEnum = "SingleExponentialSmoothingParameterized"
PlanningLevelRequestMethodEnumSingleExponentialSmoothing PlanningLevelRequestMethodEnum = "SingleExponentialSmoothing"
PlanningLevelRequestMethodEnumICue1Parameterized PlanningLevelRequestMethodEnum = "iCUE1Parameterized"
PlanningLevelRequestMethodEnumICue1 PlanningLevelRequestMethodEnum = "iCUE1"
PlanningLevelRequestMethodEnumICuEgamma PlanningLevelRequestMethodEnum = "iCUEgamma"
PlanningLevelRequestMethodEnumSimpleMovingAverage PlanningLevelRequestMethodEnum = "SimpleMovingAverage"
PlanningLevelRequestMethodEnumExternal PlanningLevelRequestMethodEnum = "External"
PlanningLevelRequestMethodEnumICuEbeta PlanningLevelRequestMethodEnum = "iCUEbeta"
)


type PlanningLevelRequest struct {
    Data []PlanningLevelDataDto `json:"data,omitempty"`
    Method PlanningLevelRequestMethodEnum `json:"method"`
    Override *bool `json:"override,omitempty"`
    Params *PlanningLevelInfoRequest `json:"params,omitempty"`
    PlanningLevelID string `json:"planningLevelId"`
    StartDate string `json:"startDate"`
    
}

