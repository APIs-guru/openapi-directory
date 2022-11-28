import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudMlV1StudyConfigMetricSpecGoalEnum {
    GoalTypeUnspecified = "GOAL_TYPE_UNSPECIFIED",
    Maximize = "MAXIMIZE",
    Minimize = "MINIMIZE"
}


// GoogleCloudMlV1StudyConfigMetricSpec
/** 
 * Represents a metric to optimize.
**/
export class GoogleCloudMlV1StudyConfigMetricSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=goal" })
  goal?: GoogleCloudMlV1StudyConfigMetricSpecGoalEnum;

  @SpeakeasyMetadata({ data: "json, name=metric" })
  metric?: string;
}
