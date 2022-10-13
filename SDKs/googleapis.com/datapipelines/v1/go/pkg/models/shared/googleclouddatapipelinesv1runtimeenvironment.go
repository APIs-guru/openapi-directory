package shared

type GoogleCloudDatapipelinesV1RuntimeEnvironmentIPConfigurationEnum string

const (
	GoogleCloudDatapipelinesV1RuntimeEnvironmentIPConfigurationEnumWorkerIPUnspecified GoogleCloudDatapipelinesV1RuntimeEnvironmentIPConfigurationEnum = "WORKER_IP_UNSPECIFIED"
	GoogleCloudDatapipelinesV1RuntimeEnvironmentIPConfigurationEnumWorkerIPPublic      GoogleCloudDatapipelinesV1RuntimeEnvironmentIPConfigurationEnum = "WORKER_IP_PUBLIC"
	GoogleCloudDatapipelinesV1RuntimeEnvironmentIPConfigurationEnumWorkerIPPrivate     GoogleCloudDatapipelinesV1RuntimeEnvironmentIPConfigurationEnum = "WORKER_IP_PRIVATE"
)

type GoogleCloudDatapipelinesV1RuntimeEnvironment struct {
	AdditionalExperiments   []string                                                         `json:"additionalExperiments"`
	AdditionalUserLabels    map[string]string                                                `json:"additionalUserLabels"`
	BypassTempDirValidation *bool                                                            `json:"bypassTempDirValidation"`
	EnableStreamingEngine   *bool                                                            `json:"enableStreamingEngine"`
	IPConfiguration         *GoogleCloudDatapipelinesV1RuntimeEnvironmentIPConfigurationEnum `json:"ipConfiguration"`
	KmsKeyName              *string                                                          `json:"kmsKeyName"`
	MachineType             *string                                                          `json:"machineType"`
	MaxWorkers              *int32                                                           `json:"maxWorkers"`
	Network                 *string                                                          `json:"network"`
	NumWorkers              *int32                                                           `json:"numWorkers"`
	ServiceAccountEmail     *string                                                          `json:"serviceAccountEmail"`
	Subnetwork              *string                                                          `json:"subnetwork"`
	TempLocation            *string                                                          `json:"tempLocation"`
	WorkerRegion            *string                                                          `json:"workerRegion"`
	WorkerZone              *string                                                          `json:"workerZone"`
	Zone                    *string                                                          `json:"zone"`
}
