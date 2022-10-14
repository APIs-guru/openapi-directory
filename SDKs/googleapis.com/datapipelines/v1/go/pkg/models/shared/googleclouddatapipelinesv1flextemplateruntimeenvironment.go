package shared

type GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum string

const (
	GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnumFlexrsUnspecified    GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum = "FLEXRS_UNSPECIFIED"
	GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnumFlexrsSpeedOptimized GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum = "FLEXRS_SPEED_OPTIMIZED"
	GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnumFlexrsCostOptimized  GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum = "FLEXRS_COST_OPTIMIZED"
)

type GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIPConfigurationEnum string

const (
	GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIPConfigurationEnumWorkerIPUnspecified GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIPConfigurationEnum = "WORKER_IP_UNSPECIFIED"
	GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIPConfigurationEnumWorkerIPPublic      GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIPConfigurationEnum = "WORKER_IP_PUBLIC"
	GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIPConfigurationEnumWorkerIPPrivate     GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIPConfigurationEnum = "WORKER_IP_PRIVATE"
)

type GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment struct {
	AdditionalExperiments []string                                                                     `json:"additionalExperiments,omitempty"`
	AdditionalUserLabels  map[string]string                                                            `json:"additionalUserLabels,omitempty"`
	EnableStreamingEngine *bool                                                                        `json:"enableStreamingEngine,omitempty"`
	FlexrsGoal            *GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum      `json:"flexrsGoal,omitempty"`
	IPConfiguration       *GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIPConfigurationEnum `json:"ipConfiguration,omitempty"`
	KmsKeyName            *string                                                                      `json:"kmsKeyName,omitempty"`
	MachineType           *string                                                                      `json:"machineType,omitempty"`
	MaxWorkers            *int32                                                                       `json:"maxWorkers,omitempty"`
	Network               *string                                                                      `json:"network,omitempty"`
	NumWorkers            *int32                                                                       `json:"numWorkers,omitempty"`
	ServiceAccountEmail   *string                                                                      `json:"serviceAccountEmail,omitempty"`
	Subnetwork            *string                                                                      `json:"subnetwork,omitempty"`
	TempLocation          *string                                                                      `json:"tempLocation,omitempty"`
	WorkerRegion          *string                                                                      `json:"workerRegion,omitempty"`
	WorkerZone            *string                                                                      `json:"workerZone,omitempty"`
	Zone                  *string                                                                      `json:"zone,omitempty"`
}
