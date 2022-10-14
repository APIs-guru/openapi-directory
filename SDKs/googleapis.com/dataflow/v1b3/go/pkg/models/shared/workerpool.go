package shared

type WorkerPoolDefaultPackageSetEnum string

const (
	WorkerPoolDefaultPackageSetEnumDefaultPackageSetUnknown WorkerPoolDefaultPackageSetEnum = "DEFAULT_PACKAGE_SET_UNKNOWN"
	WorkerPoolDefaultPackageSetEnumDefaultPackageSetNone    WorkerPoolDefaultPackageSetEnum = "DEFAULT_PACKAGE_SET_NONE"
	WorkerPoolDefaultPackageSetEnumDefaultPackageSetJava    WorkerPoolDefaultPackageSetEnum = "DEFAULT_PACKAGE_SET_JAVA"
	WorkerPoolDefaultPackageSetEnumDefaultPackageSetPython  WorkerPoolDefaultPackageSetEnum = "DEFAULT_PACKAGE_SET_PYTHON"
)

type WorkerPoolIPConfigurationEnum string

const (
	WorkerPoolIPConfigurationEnumWorkerIPUnspecified WorkerPoolIPConfigurationEnum = "WORKER_IP_UNSPECIFIED"
	WorkerPoolIPConfigurationEnumWorkerIPPublic      WorkerPoolIPConfigurationEnum = "WORKER_IP_PUBLIC"
	WorkerPoolIPConfigurationEnumWorkerIPPrivate     WorkerPoolIPConfigurationEnum = "WORKER_IP_PRIVATE"
)

type WorkerPoolTeardownPolicyEnum string

const (
	WorkerPoolTeardownPolicyEnumTeardownPolicyUnknown WorkerPoolTeardownPolicyEnum = "TEARDOWN_POLICY_UNKNOWN"
	WorkerPoolTeardownPolicyEnumTeardownAlways        WorkerPoolTeardownPolicyEnum = "TEARDOWN_ALWAYS"
	WorkerPoolTeardownPolicyEnumTeardownOnSuccess     WorkerPoolTeardownPolicyEnum = "TEARDOWN_ON_SUCCESS"
	WorkerPoolTeardownPolicyEnumTeardownNever         WorkerPoolTeardownPolicyEnum = "TEARDOWN_NEVER"
)

type WorkerPool struct {
	AutoscalingSettings         *AutoscalingSettings             `json:"autoscalingSettings,omitempty"`
	DataDisks                   []Disk                           `json:"dataDisks,omitempty"`
	DefaultPackageSet           *WorkerPoolDefaultPackageSetEnum `json:"defaultPackageSet,omitempty"`
	DiskSizeGb                  *int32                           `json:"diskSizeGb,omitempty"`
	DiskSourceImage             *string                          `json:"diskSourceImage,omitempty"`
	DiskType                    *string                          `json:"diskType,omitempty"`
	IPConfiguration             *WorkerPoolIPConfigurationEnum   `json:"ipConfiguration,omitempty"`
	Kind                        *string                          `json:"kind,omitempty"`
	MachineType                 *string                          `json:"machineType,omitempty"`
	Metadata                    map[string]string                `json:"metadata,omitempty"`
	Network                     *string                          `json:"network,omitempty"`
	NumThreadsPerWorker         *int32                           `json:"numThreadsPerWorker,omitempty"`
	NumWorkers                  *int32                           `json:"numWorkers,omitempty"`
	OnHostMaintenance           *string                          `json:"onHostMaintenance,omitempty"`
	Packages                    []Package                        `json:"packages,omitempty"`
	PoolArgs                    map[string]interface{}           `json:"poolArgs,omitempty"`
	SdkHarnessContainerImages   []SdkHarnessContainerImage       `json:"sdkHarnessContainerImages,omitempty"`
	Subnetwork                  *string                          `json:"subnetwork,omitempty"`
	TaskrunnerSettings          *TaskRunnerSettings              `json:"taskrunnerSettings,omitempty"`
	TeardownPolicy              *WorkerPoolTeardownPolicyEnum    `json:"teardownPolicy,omitempty"`
	WorkerHarnessContainerImage *string                          `json:"workerHarnessContainerImage,omitempty"`
	Zone                        *string                          `json:"zone,omitempty"`
}
