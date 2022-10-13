package shared

type GoogleCloudMlV1StudyConfigAlgorithmEnum string

const (
	GoogleCloudMlV1StudyConfigAlgorithmEnumAlgorithmUnspecified  GoogleCloudMlV1StudyConfigAlgorithmEnum = "ALGORITHM_UNSPECIFIED"
	GoogleCloudMlV1StudyConfigAlgorithmEnumGaussianProcessBandit GoogleCloudMlV1StudyConfigAlgorithmEnum = "GAUSSIAN_PROCESS_BANDIT"
	GoogleCloudMlV1StudyConfigAlgorithmEnumGridSearch            GoogleCloudMlV1StudyConfigAlgorithmEnum = "GRID_SEARCH"
	GoogleCloudMlV1StudyConfigAlgorithmEnumRandomSearch          GoogleCloudMlV1StudyConfigAlgorithmEnum = "RANDOM_SEARCH"
)

type GoogleCloudMlV1StudyConfig struct {
	Algorithm               *GoogleCloudMlV1StudyConfigAlgorithmEnum  `json:"algorithm"`
	AutomatedStoppingConfig *GoogleCloudMlV1AutomatedStoppingConfig   `json:"automatedStoppingConfig"`
	Metrics                 []GoogleCloudMlV1StudyConfigMetricSpec    `json:"metrics"`
	Parameters              []GoogleCloudMlV1StudyConfigParameterSpec `json:"parameters"`
}
