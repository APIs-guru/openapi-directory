package shared

type GoogleCloudMlV1TrainingInputScaleTierEnum string

const (
	GoogleCloudMlV1TrainingInputScaleTierEnumBasic     GoogleCloudMlV1TrainingInputScaleTierEnum = "BASIC"
	GoogleCloudMlV1TrainingInputScaleTierEnumStandard1 GoogleCloudMlV1TrainingInputScaleTierEnum = "STANDARD_1"
	GoogleCloudMlV1TrainingInputScaleTierEnumPremium1  GoogleCloudMlV1TrainingInputScaleTierEnum = "PREMIUM_1"
	GoogleCloudMlV1TrainingInputScaleTierEnumBasicGpu  GoogleCloudMlV1TrainingInputScaleTierEnum = "BASIC_GPU"
	GoogleCloudMlV1TrainingInputScaleTierEnumBasicTpu  GoogleCloudMlV1TrainingInputScaleTierEnum = "BASIC_TPU"
	GoogleCloudMlV1TrainingInputScaleTierEnumCustom    GoogleCloudMlV1TrainingInputScaleTierEnum = "CUSTOM"
)

type GoogleCloudMlV1TrainingInput struct {
	Args                  []string                                   `json:"args"`
	EnableWebAccess       *bool                                      `json:"enableWebAccess"`
	EncryptionConfig      *GoogleCloudMlV1EncryptionConfig           `json:"encryptionConfig"`
	EvaluatorConfig       *GoogleCloudMlV1ReplicaConfig              `json:"evaluatorConfig"`
	EvaluatorCount        *string                                    `json:"evaluatorCount"`
	EvaluatorType         *string                                    `json:"evaluatorType"`
	Hyperparameters       *GoogleCloudMlV1HyperparameterSpec         `json:"hyperparameters"`
	JobDir                *string                                    `json:"jobDir"`
	MasterConfig          *GoogleCloudMlV1ReplicaConfig              `json:"masterConfig"`
	MasterType            *string                                    `json:"masterType"`
	Network               *string                                    `json:"network"`
	PackageUris           []string                                   `json:"packageUris"`
	ParameterServerConfig *GoogleCloudMlV1ReplicaConfig              `json:"parameterServerConfig"`
	ParameterServerCount  *string                                    `json:"parameterServerCount"`
	ParameterServerType   *string                                    `json:"parameterServerType"`
	PythonModule          *string                                    `json:"pythonModule"`
	PythonVersion         *string                                    `json:"pythonVersion"`
	Region                *string                                    `json:"region"`
	RuntimeVersion        *string                                    `json:"runtimeVersion"`
	ScaleTier             *GoogleCloudMlV1TrainingInputScaleTierEnum `json:"scaleTier"`
	Scheduling            *GoogleCloudMlV1Scheduling                 `json:"scheduling"`
	ServiceAccount        *string                                    `json:"serviceAccount"`
	UseChiefInTfConfig    *bool                                      `json:"useChiefInTfConfig"`
	WorkerConfig          *GoogleCloudMlV1ReplicaConfig              `json:"workerConfig"`
	WorkerCount           *string                                    `json:"workerCount"`
	WorkerType            *string                                    `json:"workerType"`
}
