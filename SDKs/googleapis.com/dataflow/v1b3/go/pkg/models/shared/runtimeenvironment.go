package shared

type RuntimeEnvironmentIPConfigurationEnum string

const (
	RuntimeEnvironmentIPConfigurationEnumWorkerIPUnspecified RuntimeEnvironmentIPConfigurationEnum = "WORKER_IP_UNSPECIFIED"
	RuntimeEnvironmentIPConfigurationEnumWorkerIPPublic      RuntimeEnvironmentIPConfigurationEnum = "WORKER_IP_PUBLIC"
	RuntimeEnvironmentIPConfigurationEnumWorkerIPPrivate     RuntimeEnvironmentIPConfigurationEnum = "WORKER_IP_PRIVATE"
)

type RuntimeEnvironment struct {
	AdditionalExperiments   []string                               `json:"additionalExperiments"`
	AdditionalUserLabels    map[string]string                      `json:"additionalUserLabels"`
	BypassTempDirValidation *bool                                  `json:"bypassTempDirValidation"`
	EnableStreamingEngine   *bool                                  `json:"enableStreamingEngine"`
	IPConfiguration         *RuntimeEnvironmentIPConfigurationEnum `json:"ipConfiguration"`
	KmsKeyName              *string                                `json:"kmsKeyName"`
	MachineType             *string                                `json:"machineType"`
	MaxWorkers              *int32                                 `json:"maxWorkers"`
	Network                 *string                                `json:"network"`
	NumWorkers              *int32                                 `json:"numWorkers"`
	ServiceAccountEmail     *string                                `json:"serviceAccountEmail"`
	Subnetwork              *string                                `json:"subnetwork"`
	TempLocation            *string                                `json:"tempLocation"`
	WorkerRegion            *string                                `json:"workerRegion"`
	WorkerZone              *string                                `json:"workerZone"`
	Zone                    *string                                `json:"zone"`
}
