package shared




type GoogleCloudDatapipelinesV1RuntimeEnvironmentIPConfigurationEnum string

const (
    GoogleCloudDatapipelinesV1RuntimeEnvironmentIPConfigurationEnumWorkerIPUnspecified GoogleCloudDatapipelinesV1RuntimeEnvironmentIPConfigurationEnum = "WORKER_IP_UNSPECIFIED"
GoogleCloudDatapipelinesV1RuntimeEnvironmentIPConfigurationEnumWorkerIPPublic GoogleCloudDatapipelinesV1RuntimeEnvironmentIPConfigurationEnum = "WORKER_IP_PUBLIC"
GoogleCloudDatapipelinesV1RuntimeEnvironmentIPConfigurationEnumWorkerIPPrivate GoogleCloudDatapipelinesV1RuntimeEnvironmentIPConfigurationEnum = "WORKER_IP_PRIVATE"
)


type GoogleCloudDatapipelinesV1RuntimeEnvironment struct {
    AdditionalExperiments []string `json:"additionalExperiments,omitempty"`
    AdditionalUserLabels map[string]string `json:"additionalUserLabels,omitempty"`
    BypassTempDirValidation *bool `json:"bypassTempDirValidation,omitempty"`
    EnableStreamingEngine *bool `json:"enableStreamingEngine,omitempty"`
    IPConfiguration *GoogleCloudDatapipelinesV1RuntimeEnvironmentIPConfigurationEnum `json:"ipConfiguration,omitempty"`
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

