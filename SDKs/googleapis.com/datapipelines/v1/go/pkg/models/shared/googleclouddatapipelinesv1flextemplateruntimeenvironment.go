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
	AdditionalExperiments []string                                                                     `json:"additionalExperiments"`
	AdditionalUserLabels  map[string]string                                                            `json:"additionalUserLabels"`
	EnableStreamingEngine *bool                                                                        `json:"enableStreamingEngine"`
	FlexrsGoal            *GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum      `json:"flexrsGoal"`
	IPConfiguration       *GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIPConfigurationEnum `json:"ipConfiguration"`
	KmsKeyName            *string                                                                      `json:"kmsKeyName"`
	MachineType           *string                                                                      `json:"machineType"`
	MaxWorkers            *int32                                                                       `json:"maxWorkers"`
	Network               *string                                                                      `json:"network"`
	NumWorkers            *int32                                                                       `json:"numWorkers"`
	ServiceAccountEmail   *string                                                                      `json:"serviceAccountEmail"`
	Subnetwork            *string                                                                      `json:"subnetwork"`
	TempLocation          *string                                                                      `json:"tempLocation"`
	WorkerRegion          *string                                                                      `json:"workerRegion"`
	WorkerZone            *string                                                                      `json:"workerZone"`
	Zone                  *string                                                                      `json:"zone"`
}
