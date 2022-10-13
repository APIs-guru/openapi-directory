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
	AcceleratorConfig    *GoogleCloudMlV1AcceleratorConfig    `json:"acceleratorConfig"`
	AutoScaling          *GoogleCloudMlV1AutoScaling          `json:"autoScaling"`
	Container            *GoogleCloudMlV1ContainerSpec        `json:"container"`
	CreateTime           *string                              `json:"createTime"`
	DeploymentURI        *string                              `json:"deploymentUri"`
	Description          *string                              `json:"description"`
	ErrorMessage         *string                              `json:"errorMessage"`
	Etag                 *string                              `json:"etag"`
	ExplanationConfig    *GoogleCloudMlV1ExplanationConfig    `json:"explanationConfig"`
	Framework            *GoogleCloudMlV1VersionFrameworkEnum `json:"framework"`
	IsDefault            *bool                                `json:"isDefault"`
	Labels               map[string]string                    `json:"labels"`
	LastMigrationModelID *string                              `json:"lastMigrationModelId"`
	LastMigrationTime    *string                              `json:"lastMigrationTime"`
	LastUseTime          *string                              `json:"lastUseTime"`
	MachineType          *string                              `json:"machineType"`
	ManualScaling        *GoogleCloudMlV1ManualScaling        `json:"manualScaling"`
	Name                 *string                              `json:"name"`
	PackageUris          []string                             `json:"packageUris"`
	PredictionClass      *string                              `json:"predictionClass"`
	PythonVersion        *string                              `json:"pythonVersion"`
	RequestLoggingConfig *GoogleCloudMlV1RequestLoggingConfig `json:"requestLoggingConfig"`
	Routes               *GoogleCloudMlV1RouteMap             `json:"routes"`
	RuntimeVersion       *string                              `json:"runtimeVersion"`
	ServiceAccount       *string                              `json:"serviceAccount"`
	State                *GoogleCloudMlV1VersionStateEnum     `json:"state"`
}
