package shared




type RuntimeEnvironmentIPConfigurationEnum string

const (
    RuntimeEnvironmentIPConfigurationEnumWorkerIPUnspecified RuntimeEnvironmentIPConfigurationEnum = "WORKER_IP_UNSPECIFIED"
RuntimeEnvironmentIPConfigurationEnumWorkerIPPublic RuntimeEnvironmentIPConfigurationEnum = "WORKER_IP_PUBLIC"
RuntimeEnvironmentIPConfigurationEnumWorkerIPPrivate RuntimeEnvironmentIPConfigurationEnum = "WORKER_IP_PRIVATE"
)


type RuntimeEnvironment struct {
    AdditionalExperiments []string `json:"additionalExperiments,omitempty"`
    AdditionalUserLabels map[string]string `json:"additionalUserLabels,omitempty"`
    BypassTempDirValidation *bool `json:"bypassTempDirValidation,omitempty"`
    EnableStreamingEngine *bool `json:"enableStreamingEngine,omitempty"`
    IPConfiguration *RuntimeEnvironmentIPConfigurationEnum `json:"ipConfiguration,omitempty"`
    KmsKeyName *string `json:"kmsKeyName,omitempty"`
    MachineType *string `json:"machineType,omitempty"`
    MaxWorkers *int32 `json:"maxWorkers,omitempty"`
    Network *string `json:"network,omitempty"`
    NumWorkers *int32 `json:"numWorkers,omitempty"`
    ServiceAccountEmail *string `json:"serviceAccountEmail,omitempty"`
    Subnetwork *string `json:"subnetwork,omitempty"`
    TempLocation *string `json:"tempLocation,omitempty"`
    WorkerRegion *string `json:"workerRegion,omitempty"`
    WorkerZone *string `json:"workerZone,omitempty"`
    Zone *string `json:"zone,omitempty"`
    
}

