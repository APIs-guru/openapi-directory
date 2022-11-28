import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudMlV1StudyConfigMetricSpecGoalEnum {
    GoalTypeUnspecified = "GOAL_TYPE_UNSPECIFIED",
    Maximize = "MAXIMIZE",
    Minimize = "MINIMIZE"
}
/**
 * Represents a metric to optimize.
**/
export declare class GoogleCloudMlV1StudyConfigMetricSpec extends SpeakeasyBase {
    goal?: GoogleCloudMlV1StudyConfigMetricSpecGoalEnum;
    metric?: string;
}
