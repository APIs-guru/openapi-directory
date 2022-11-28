import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PerformanceGoalPerformanceGoalTypeEnum {
    PerformanceGoalTypeUnspecified = "PERFORMANCE_GOAL_TYPE_UNSPECIFIED",
    PerformanceGoalTypeCpm = "PERFORMANCE_GOAL_TYPE_CPM",
    PerformanceGoalTypeCpc = "PERFORMANCE_GOAL_TYPE_CPC",
    PerformanceGoalTypeCpa = "PERFORMANCE_GOAL_TYPE_CPA",
    PerformanceGoalTypeCtr = "PERFORMANCE_GOAL_TYPE_CTR",
    PerformanceGoalTypeViewability = "PERFORMANCE_GOAL_TYPE_VIEWABILITY",
    PerformanceGoalTypeCpiavc = "PERFORMANCE_GOAL_TYPE_CPIAVC",
    PerformanceGoalTypeCpe = "PERFORMANCE_GOAL_TYPE_CPE",
    PerformanceGoalTypeClickCvr = "PERFORMANCE_GOAL_TYPE_CLICK_CVR",
    PerformanceGoalTypeImpressionCvr = "PERFORMANCE_GOAL_TYPE_IMPRESSION_CVR",
    PerformanceGoalTypeVcpm = "PERFORMANCE_GOAL_TYPE_VCPM",
    PerformanceGoalTypeVtr = "PERFORMANCE_GOAL_TYPE_VTR",
    PerformanceGoalTypeAudioCompletionRate = "PERFORMANCE_GOAL_TYPE_AUDIO_COMPLETION_RATE",
    PerformanceGoalTypeVideoCompletionRate = "PERFORMANCE_GOAL_TYPE_VIDEO_COMPLETION_RATE",
    PerformanceGoalTypeOther = "PERFORMANCE_GOAL_TYPE_OTHER"
}
/**
 * Settings that control the performance goal of a campaign or insertion order.
**/
export declare class PerformanceGoal extends SpeakeasyBase {
    performanceGoalAmountMicros?: string;
    performanceGoalPercentageMicros?: string;
    performanceGoalString?: string;
    performanceGoalType?: PerformanceGoalPerformanceGoalTypeEnum;
}
