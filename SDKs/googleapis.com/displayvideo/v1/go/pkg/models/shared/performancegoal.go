package shared

type PerformanceGoalPerformanceGoalTypeEnum string

const (
	PerformanceGoalPerformanceGoalTypeEnumPerformanceGoalTypeUnspecified         PerformanceGoalPerformanceGoalTypeEnum = "PERFORMANCE_GOAL_TYPE_UNSPECIFIED"
	PerformanceGoalPerformanceGoalTypeEnumPerformanceGoalTypeCpm                 PerformanceGoalPerformanceGoalTypeEnum = "PERFORMANCE_GOAL_TYPE_CPM"
	PerformanceGoalPerformanceGoalTypeEnumPerformanceGoalTypeCpc                 PerformanceGoalPerformanceGoalTypeEnum = "PERFORMANCE_GOAL_TYPE_CPC"
	PerformanceGoalPerformanceGoalTypeEnumPerformanceGoalTypeCpa                 PerformanceGoalPerformanceGoalTypeEnum = "PERFORMANCE_GOAL_TYPE_CPA"
	PerformanceGoalPerformanceGoalTypeEnumPerformanceGoalTypeCtr                 PerformanceGoalPerformanceGoalTypeEnum = "PERFORMANCE_GOAL_TYPE_CTR"
	PerformanceGoalPerformanceGoalTypeEnumPerformanceGoalTypeViewability         PerformanceGoalPerformanceGoalTypeEnum = "PERFORMANCE_GOAL_TYPE_VIEWABILITY"
	PerformanceGoalPerformanceGoalTypeEnumPerformanceGoalTypeCpiavc              PerformanceGoalPerformanceGoalTypeEnum = "PERFORMANCE_GOAL_TYPE_CPIAVC"
	PerformanceGoalPerformanceGoalTypeEnumPerformanceGoalTypeCpe                 PerformanceGoalPerformanceGoalTypeEnum = "PERFORMANCE_GOAL_TYPE_CPE"
	PerformanceGoalPerformanceGoalTypeEnumPerformanceGoalTypeClickCvr            PerformanceGoalPerformanceGoalTypeEnum = "PERFORMANCE_GOAL_TYPE_CLICK_CVR"
	PerformanceGoalPerformanceGoalTypeEnumPerformanceGoalTypeImpressionCvr       PerformanceGoalPerformanceGoalTypeEnum = "PERFORMANCE_GOAL_TYPE_IMPRESSION_CVR"
	PerformanceGoalPerformanceGoalTypeEnumPerformanceGoalTypeVcpm                PerformanceGoalPerformanceGoalTypeEnum = "PERFORMANCE_GOAL_TYPE_VCPM"
	PerformanceGoalPerformanceGoalTypeEnumPerformanceGoalTypeVtr                 PerformanceGoalPerformanceGoalTypeEnum = "PERFORMANCE_GOAL_TYPE_VTR"
	PerformanceGoalPerformanceGoalTypeEnumPerformanceGoalTypeAudioCompletionRate PerformanceGoalPerformanceGoalTypeEnum = "PERFORMANCE_GOAL_TYPE_AUDIO_COMPLETION_RATE"
	PerformanceGoalPerformanceGoalTypeEnumPerformanceGoalTypeVideoCompletionRate PerformanceGoalPerformanceGoalTypeEnum = "PERFORMANCE_GOAL_TYPE_VIDEO_COMPLETION_RATE"
	PerformanceGoalPerformanceGoalTypeEnumPerformanceGoalTypeOther               PerformanceGoalPerformanceGoalTypeEnum = "PERFORMANCE_GOAL_TYPE_OTHER"
)

type PerformanceGoal struct {
	PerformanceGoalAmountMicros     *string                                 `json:"performanceGoalAmountMicros,omitempty"`
	PerformanceGoalPercentageMicros *string                                 `json:"performanceGoalPercentageMicros,omitempty"`
	PerformanceGoalString           *string                                 `json:"performanceGoalString,omitempty"`
	PerformanceGoalType             *PerformanceGoalPerformanceGoalTypeEnum `json:"performanceGoalType,omitempty"`
}
