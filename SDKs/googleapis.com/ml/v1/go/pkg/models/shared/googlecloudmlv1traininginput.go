package shared




type GoogleCloudMlV1TrainingInputScaleTierEnum string

const (
    GoogleCloudMlV1TrainingInputScaleTierEnumBasic GoogleCloudMlV1TrainingInputScaleTierEnum = "BASIC"
GoogleCloudMlV1TrainingInputScaleTierEnumStandard1 GoogleCloudMlV1TrainingInputScaleTierEnum = "STANDARD_1"
GoogleCloudMlV1TrainingInputScaleTierEnumPremium1 GoogleCloudMlV1TrainingInputScaleTierEnum = "PREMIUM_1"
GoogleCloudMlV1TrainingInputScaleTierEnumBasicGpu GoogleCloudMlV1TrainingInputScaleTierEnum = "BASIC_GPU"
GoogleCloudMlV1TrainingInputScaleTierEnumBasicTpu GoogleCloudMlV1TrainingInputScaleTierEnum = "BASIC_TPU"
GoogleCloudMlV1TrainingInputScaleTierEnumCustom GoogleCloudMlV1TrainingInputScaleTierEnum = "CUSTOM"
)


type GoogleCloudMlV1TrainingInput struct {
    Args []string `json:"args,omitempty"`
    EnableWebAccess *bool `json:"enableWebAccess,omitempty"`
    EncryptionConfig *GoogleCloudMlV1EncryptionConfig `json:"encryptionConfig,omitempty"`
    EvaluatorConfig *GoogleCloudMlV1ReplicaConfig `json:"evaluatorConfig,omitempty"`
    EvaluatorCount *string `json:"evaluatorCount,omitempty"`
    EvaluatorType *string `json:"evaluatorType,omitempty"`
    Hyperparameters *GoogleCloudMlV1HyperparameterSpec `json:"hyperparameters,omitempty"`
    JobDir *string `json:"jobDir,omitempty"`
    MasterConfig *GoogleCloudMlV1ReplicaConfig `json:"masterConfig,omitempty"`
    MasterType *string `json:"masterType,omitempty"`
    Network *string `json:"network,omitempty"`
    PackageUris []string `json:"packageUris,omitempty"`
    ParameterServerConfig *GoogleCloudMlV1ReplicaConfig `json:"parameterServerConfig,omitempty"`
    ParameterServerCount *string `json:"parameterServerCount,omitempty"`
    ParameterServerType *string `json:"parameterServerType,omitempty"`
    PythonModule *string `json:"pythonModule,omitempty"`
    PythonVersion *string `json:"pythonVersion,omitempty"`
    Region *string `json:"region,omitempty"`
    RuntimeVersion *string `json:"runtimeVersion,omitempty"`
    ScaleTier *GoogleCloudMlV1TrainingInputScaleTierEnum `json:"scaleTier,omitempty"`
    Scheduling *GoogleCloudMlV1Scheduling `json:"scheduling,omitempty"`
    ServiceAccount *string `json:"serviceAccount,omitempty"`
    UseChiefInTfConfig *bool `json:"useChiefInTfConfig,omitempty"`
    WorkerConfig *GoogleCloudMlV1ReplicaConfig `json:"workerConfig,omitempty"`
    WorkerCount *string `json:"workerCount,omitempty"`
    WorkerType *string `json:"workerType,omitempty"`
    
}

