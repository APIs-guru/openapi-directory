package shared




type EnvironmentFlexResourceSchedulingGoalEnum string

const (
    EnvironmentFlexResourceSchedulingGoalEnumFlexrsUnspecified EnvironmentFlexResourceSchedulingGoalEnum = "FLEXRS_UNSPECIFIED"
EnvironmentFlexResourceSchedulingGoalEnumFlexrsSpeedOptimized EnvironmentFlexResourceSchedulingGoalEnum = "FLEXRS_SPEED_OPTIMIZED"
EnvironmentFlexResourceSchedulingGoalEnumFlexrsCostOptimized EnvironmentFlexResourceSchedulingGoalEnum = "FLEXRS_COST_OPTIMIZED"
)



type EnvironmentShuffleModeEnum string

const (
    EnvironmentShuffleModeEnumShuffleModeUnspecified EnvironmentShuffleModeEnum = "SHUFFLE_MODE_UNSPECIFIED"
EnvironmentShuffleModeEnumVMBased EnvironmentShuffleModeEnum = "VM_BASED"
EnvironmentShuffleModeEnumServiceBased EnvironmentShuffleModeEnum = "SERVICE_BASED"
)


type Environment struct {
    ClusterManagerAPIService *string `json:"clusterManagerApiService,omitempty"`
    Dataset *string `json:"dataset,omitempty"`
    DebugOptions *DebugOptions `json:"debugOptions,omitempty"`
    Experiments []string `json:"experiments,omitempty"`
    FlexResourceSchedulingGoal *EnvironmentFlexResourceSchedulingGoalEnum `json:"flexResourceSchedulingGoal,omitempty"`
    InternalExperiments map[string]interface{} `json:"internalExperiments,omitempty"`
    SdkPipelineOptions map[string]interface{} `json:"sdkPipelineOptions,omitempty"`
    ServiceAccountEmail *string `json:"serviceAccountEmail,omitempty"`
    ServiceKmsKeyName *string `json:"serviceKmsKeyName,omitempty"`
    ServiceOptions []string `json:"serviceOptions,omitempty"`
    ShuffleMode *EnvironmentShuffleModeEnum `json:"shuffleMode,omitempty"`
    TempStoragePrefix *string `json:"tempStoragePrefix,omitempty"`
    UserAgent map[string]interface{} `json:"userAgent,omitempty"`
    Version map[string]interface{} `json:"version,omitempty"`
    WorkerPools []WorkerPool `json:"workerPools,omitempty"`
    WorkerRegion *string `json:"workerRegion,omitempty"`
    WorkerZone *string `json:"workerZone,omitempty"`
    
}

