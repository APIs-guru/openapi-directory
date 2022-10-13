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
	AutoscalingSettings         *AutoscalingSettings             `json:"autoscalingSettings"`
	DataDisks                   []Disk                           `json:"dataDisks"`
	DefaultPackageSet           *WorkerPoolDefaultPackageSetEnum `json:"defaultPackageSet"`
	DiskSizeGb                  *int32                           `json:"diskSizeGb"`
	DiskSourceImage             *string                          `json:"diskSourceImage"`
	DiskType                    *string                          `json:"diskType"`
	IPConfiguration             *WorkerPoolIPConfigurationEnum   `json:"ipConfiguration"`
	Kind                        *string                          `json:"kind"`
	MachineType                 *string                          `json:"machineType"`
	Metadata                    map[string]string                `json:"metadata"`
	Network                     *string                          `json:"network"`
	NumThreadsPerWorker         *int32                           `json:"numThreadsPerWorker"`
	NumWorkers                  *int32                           `json:"numWorkers"`
	OnHostMaintenance           *string                          `json:"onHostMaintenance"`
	Packages                    []Package                        `json:"packages"`
	PoolArgs                    map[string]interface{}           `json:"poolArgs"`
	SdkHarnessContainerImages   []SdkHarnessContainerImage       `json:"sdkHarnessContainerImages"`
	Subnetwork                  *string                          `json:"subnetwork"`
	TaskrunnerSettings          *TaskRunnerSettings              `json:"taskrunnerSettings"`
	TeardownPolicy              *WorkerPoolTeardownPolicyEnum    `json:"teardownPolicy"`
	WorkerHarnessContainerImage *string                          `json:"workerHarnessContainerImage"`
	Zone                        *string                          `json:"zone"`
}
