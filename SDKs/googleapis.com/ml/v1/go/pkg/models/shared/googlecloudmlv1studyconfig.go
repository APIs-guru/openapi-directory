package shared

type GoogleCloudMlV1StudyConfigAlgorithmEnum string

const (
	GoogleCloudMlV1StudyConfigAlgorithmEnumAlgorithmUnspecified  GoogleCloudMlV1StudyConfigAlgorithmEnum = "ALGORITHM_UNSPECIFIED"
	GoogleCloudMlV1StudyConfigAlgorithmEnumGaussianProcessBandit GoogleCloudMlV1StudyConfigAlgorithmEnum = "GAUSSIAN_PROCESS_BANDIT"
	GoogleCloudMlV1StudyConfigAlgorithmEnumGridSearch            GoogleCloudMlV1StudyConfigAlgorithmEnum = "GRID_SEARCH"
	GoogleCloudMlV1StudyConfigAlgorithmEnumRandomSearch          GoogleCloudMlV1StudyConfigAlgorithmEnum = "RANDOM_SEARCH"
)

// GoogleCloudMlV1StudyConfig
// Represents configuration of a study.
type GoogleCloudMlV1StudyConfig struct {
	Algorithm               *GoogleCloudMlV1StudyConfigAlgorithmEnum  `json:"algorithm,omitempty"`
	AutomatedStoppingConfig *GoogleCloudMlV1AutomatedStoppingConfig   `json:"automatedStoppingConfig,omitempty"`
	Metrics                 []GoogleCloudMlV1StudyConfigMetricSpec    `json:"metrics,omitempty"`
	Parameters              []GoogleCloudMlV1StudyConfigParameterSpec `json:"parameters,omitempty"`
}
