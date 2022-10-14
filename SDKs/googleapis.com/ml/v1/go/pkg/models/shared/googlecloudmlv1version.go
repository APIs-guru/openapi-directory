package shared

type GoogleCloudMlV1VersionFrameworkEnum string

const (
	GoogleCloudMlV1VersionFrameworkEnumFrameworkUnspecified GoogleCloudMlV1VersionFrameworkEnum = "FRAMEWORK_UNSPECIFIED"
	GoogleCloudMlV1VersionFrameworkEnumTensorflow           GoogleCloudMlV1VersionFrameworkEnum = "TENSORFLOW"
	GoogleCloudMlV1VersionFrameworkEnumScikitLearn          GoogleCloudMlV1VersionFrameworkEnum = "SCIKIT_LEARN"
	GoogleCloudMlV1VersionFrameworkEnumXgboost              GoogleCloudMlV1VersionFrameworkEnum = "XGBOOST"
)

type GoogleCloudMlV1VersionStateEnum string

const (
	GoogleCloudMlV1VersionStateEnumUnknown  GoogleCloudMlV1VersionStateEnum = "UNKNOWN"
	GoogleCloudMlV1VersionStateEnumReady    GoogleCloudMlV1VersionStateEnum = "READY"
	GoogleCloudMlV1VersionStateEnumCreating GoogleCloudMlV1VersionStateEnum = "CREATING"
	GoogleCloudMlV1VersionStateEnumFailed   GoogleCloudMlV1VersionStateEnum = "FAILED"
	GoogleCloudMlV1VersionStateEnumDeleting GoogleCloudMlV1VersionStateEnum = "DELETING"
	GoogleCloudMlV1VersionStateEnumUpdating GoogleCloudMlV1VersionStateEnum = "UPDATING"
)

type GoogleCloudMlV1Version struct {
	AcceleratorConfig    *GoogleCloudMlV1AcceleratorConfig    `json:"acceleratorConfig,omitempty"`
	AutoScaling          *GoogleCloudMlV1AutoScaling          `json:"autoScaling,omitempty"`
	Container            *GoogleCloudMlV1ContainerSpec        `json:"container,omitempty"`
	CreateTime           *string                              `json:"createTime,omitempty"`
	DeploymentURI        *string                              `json:"deploymentUri,omitempty"`
	Description          *string                              `json:"description,omitempty"`
	ErrorMessage         *string                              `json:"errorMessage,omitempty"`
	Etag                 *string                              `json:"etag,omitempty"`
	ExplanationConfig    *GoogleCloudMlV1ExplanationConfig    `json:"explanationConfig,omitempty"`
	Framework            *GoogleCloudMlV1VersionFrameworkEnum `json:"framework,omitempty"`
	IsDefault            *bool                                `json:"isDefault,omitempty"`
	Labels               map[string]string                    `json:"labels,omitempty"`
	LastMigrationModelID *string                              `json:"lastMigrationModelId,omitempty"`
	LastMigrationTime    *string                              `json:"lastMigrationTime,omitempty"`
	LastUseTime          *string                              `json:"lastUseTime,omitempty"`
	MachineType          *string                              `json:"machineType,omitempty"`
	ManualScaling        *GoogleCloudMlV1ManualScaling        `json:"manualScaling,omitempty"`
	Name                 *string                              `json:"name,omitempty"`
	PackageUris          []string                             `json:"packageUris,omitempty"`
	PredictionClass      *string                              `json:"predictionClass,omitempty"`
	PythonVersion        *string                              `json:"pythonVersion,omitempty"`
	RequestLoggingConfig *GoogleCloudMlV1RequestLoggingConfig `json:"requestLoggingConfig,omitempty"`
	Routes               *GoogleCloudMlV1RouteMap             `json:"routes,omitempty"`
	RuntimeVersion       *string                              `json:"runtimeVersion,omitempty"`
	ServiceAccount       *string                              `json:"serviceAccount,omitempty"`
	State                *GoogleCloudMlV1VersionStateEnum     `json:"state,omitempty"`
}
