package shared

type GoogleCloudMlV1StudyConfigMetricSpecGoalEnum string

const (
	GoogleCloudMlV1StudyConfigMetricSpecGoalEnumGoalTypeUnspecified GoogleCloudMlV1StudyConfigMetricSpecGoalEnum = "GOAL_TYPE_UNSPECIFIED"
	GoogleCloudMlV1StudyConfigMetricSpecGoalEnumMaximize            GoogleCloudMlV1StudyConfigMetricSpecGoalEnum = "MAXIMIZE"
	GoogleCloudMlV1StudyConfigMetricSpecGoalEnumMinimize            GoogleCloudMlV1StudyConfigMetricSpecGoalEnum = "MINIMIZE"
)

type GoogleCloudMlV1StudyConfigMetricSpec struct {
	Goal   *GoogleCloudMlV1StudyConfigMetricSpecGoalEnum `json:"goal,omitempty"`
	Metric *string                                       `json:"metric,omitempty"`
}
