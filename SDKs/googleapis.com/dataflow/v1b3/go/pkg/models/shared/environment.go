package shared

type EnvironmentFlexResourceSchedulingGoalEnum string

const (
	EnvironmentFlexResourceSchedulingGoalEnumFlexrsUnspecified    EnvironmentFlexResourceSchedulingGoalEnum = "FLEXRS_UNSPECIFIED"
	EnvironmentFlexResourceSchedulingGoalEnumFlexrsSpeedOptimized EnvironmentFlexResourceSchedulingGoalEnum = "FLEXRS_SPEED_OPTIMIZED"
	EnvironmentFlexResourceSchedulingGoalEnumFlexrsCostOptimized  EnvironmentFlexResourceSchedulingGoalEnum = "FLEXRS_COST_OPTIMIZED"
)

type EnvironmentShuffleModeEnum string

const (
	EnvironmentShuffleModeEnumShuffleModeUnspecified EnvironmentShuffleModeEnum = "SHUFFLE_MODE_UNSPECIFIED"
	EnvironmentShuffleModeEnumVMBased                EnvironmentShuffleModeEnum = "VM_BASED"
	EnvironmentShuffleModeEnumServiceBased           EnvironmentShuffleModeEnum = "SERVICE_BASED"
)

type Environment struct {
	ClusterManagerAPIService   *string                                    `json:"clusterManagerApiService"`
	Dataset                    *string                                    `json:"dataset"`
	DebugOptions               *DebugOptions                              `json:"debugOptions"`
	Experiments                []string                                   `json:"experiments"`
	FlexResourceSchedulingGoal *EnvironmentFlexResourceSchedulingGoalEnum `json:"flexResourceSchedulingGoal"`
	InternalExperiments        map[string]interface{}                     `json:"internalExperiments"`
	SdkPipelineOptions         map[string]interface{}                     `json:"sdkPipelineOptions"`
	ServiceAccountEmail        *string                                    `json:"serviceAccountEmail"`
	ServiceKmsKeyName          *string                                    `json:"serviceKmsKeyName"`
	ServiceOptions             []string                                   `json:"serviceOptions"`
	ShuffleMode                *EnvironmentShuffleModeEnum                `json:"shuffleMode"`
	TempStoragePrefix          *string                                    `json:"tempStoragePrefix"`
	UserAgent                  map[string]interface{}                     `json:"userAgent"`
	Version                    map[string]interface{}                     `json:"version"`
	WorkerPools                []WorkerPool                               `json:"workerPools"`
	WorkerRegion               *string                                    `json:"workerRegion"`
	WorkerZone                 *string                                    `json:"workerZone"`
}
