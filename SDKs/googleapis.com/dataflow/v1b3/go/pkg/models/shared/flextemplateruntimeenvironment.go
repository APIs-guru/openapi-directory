package shared

type FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum string

const (
	FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnumAutoscalingAlgorithmUnknown FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum = "AUTOSCALING_ALGORITHM_UNKNOWN"
	FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnumAutoscalingAlgorithmNone    FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum = "AUTOSCALING_ALGORITHM_NONE"
	FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnumAutoscalingAlgorithmBasic   FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum = "AUTOSCALING_ALGORITHM_BASIC"
)

type FlexTemplateRuntimeEnvironmentFlexrsGoalEnum string

const (
	FlexTemplateRuntimeEnvironmentFlexrsGoalEnumFlexrsUnspecified    FlexTemplateRuntimeEnvironmentFlexrsGoalEnum = "FLEXRS_UNSPECIFIED"
	FlexTemplateRuntimeEnvironmentFlexrsGoalEnumFlexrsSpeedOptimized FlexTemplateRuntimeEnvironmentFlexrsGoalEnum = "FLEXRS_SPEED_OPTIMIZED"
	FlexTemplateRuntimeEnvironmentFlexrsGoalEnumFlexrsCostOptimized  FlexTemplateRuntimeEnvironmentFlexrsGoalEnum = "FLEXRS_COST_OPTIMIZED"
)

type FlexTemplateRuntimeEnvironmentIPConfigurationEnum string

const (
	FlexTemplateRuntimeEnvironmentIPConfigurationEnumWorkerIPUnspecified FlexTemplateRuntimeEnvironmentIPConfigurationEnum = "WORKER_IP_UNSPECIFIED"
	FlexTemplateRuntimeEnvironmentIPConfigurationEnumWorkerIPPublic      FlexTemplateRuntimeEnvironmentIPConfigurationEnum = "WORKER_IP_PUBLIC"
	FlexTemplateRuntimeEnvironmentIPConfigurationEnumWorkerIPPrivate     FlexTemplateRuntimeEnvironmentIPConfigurationEnum = "WORKER_IP_PRIVATE"
)

type FlexTemplateRuntimeEnvironment struct {
	AdditionalExperiments             []string                                                `json:"additionalExperiments"`
	AdditionalUserLabels              map[string]string                                       `json:"additionalUserLabels"`
	AutoscalingAlgorithm              *FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum `json:"autoscalingAlgorithm"`
	DiskSizeGb                        *int32                                                  `json:"diskSizeGb"`
	DumpHeapOnOom                     *bool                                                   `json:"dumpHeapOnOom"`
	EnableLauncherVMSerialPortLogging *bool                                                   `json:"enableLauncherVmSerialPortLogging"`
	EnableStreamingEngine             *bool                                                   `json:"enableStreamingEngine"`
	FlexrsGoal                        *FlexTemplateRuntimeEnvironmentFlexrsGoalEnum           `json:"flexrsGoal"`
	IPConfiguration                   *FlexTemplateRuntimeEnvironmentIPConfigurationEnum      `json:"ipConfiguration"`
	KmsKeyName                        *string                                                 `json:"kmsKeyName"`
	LauncherMachineType               *string                                                 `json:"launcherMachineType"`
	MachineType                       *string                                                 `json:"machineType"`
	MaxWorkers                        *int32                                                  `json:"maxWorkers"`
	Network                           *string                                                 `json:"network"`
	NumWorkers                        *int32                                                  `json:"numWorkers"`
	SaveHeapDumpsToGcsPath            *string                                                 `json:"saveHeapDumpsToGcsPath"`
	SdkContainerImage                 *string                                                 `json:"sdkContainerImage"`
	ServiceAccountEmail               *string                                                 `json:"serviceAccountEmail"`
	StagingLocation                   *string                                                 `json:"stagingLocation"`
	Subnetwork                        *string                                                 `json:"subnetwork"`
	TempLocation                      *string                                                 `json:"tempLocation"`
	WorkerRegion                      *string                                                 `json:"workerRegion"`
	WorkerZone                        *string                                                 `json:"workerZone"`
	Zone                              *string                                                 `json:"zone"`
}
