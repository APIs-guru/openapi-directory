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
	AdditionalExperiments             []string                                                `json:"additionalExperiments,omitempty"`
	AdditionalUserLabels              map[string]string                                       `json:"additionalUserLabels,omitempty"`
	AutoscalingAlgorithm              *FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum `json:"autoscalingAlgorithm,omitempty"`
	DiskSizeGb                        *int32                                                  `json:"diskSizeGb,omitempty"`
	DumpHeapOnOom                     *bool                                                   `json:"dumpHeapOnOom,omitempty"`
	EnableLauncherVMSerialPortLogging *bool                                                   `json:"enableLauncherVmSerialPortLogging,omitempty"`
	EnableStreamingEngine             *bool                                                   `json:"enableStreamingEngine,omitempty"`
	FlexrsGoal                        *FlexTemplateRuntimeEnvironmentFlexrsGoalEnum           `json:"flexrsGoal,omitempty"`
	IPConfiguration                   *FlexTemplateRuntimeEnvironmentIPConfigurationEnum      `json:"ipConfiguration,omitempty"`
	KmsKeyName                        *string                                                 `json:"kmsKeyName,omitempty"`
	LauncherMachineType               *string                                                 `json:"launcherMachineType,omitempty"`
	MachineType                       *string                                                 `json:"machineType,omitempty"`
	MaxWorkers                        *int32                                                  `json:"maxWorkers,omitempty"`
	Network                           *string                                                 `json:"network,omitempty"`
	NumWorkers                        *int32                                                  `json:"numWorkers,omitempty"`
	SaveHeapDumpsToGcsPath            *string                                                 `json:"saveHeapDumpsToGcsPath,omitempty"`
	SdkContainerImage                 *string                                                 `json:"sdkContainerImage,omitempty"`
	ServiceAccountEmail               *string                                                 `json:"serviceAccountEmail,omitempty"`
	StagingLocation                   *string                                                 `json:"stagingLocation,omitempty"`
	Subnetwork                        *string                                                 `json:"subnetwork,omitempty"`
	TempLocation                      *string                                                 `json:"tempLocation,omitempty"`
	WorkerRegion                      *string                                                 `json:"workerRegion,omitempty"`
	WorkerZone                        *string                                                 `json:"workerZone,omitempty"`
	Zone                              *string                                                 `json:"zone,omitempty"`
}
