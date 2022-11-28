package shared

type WorkerLifecycleEventEventEnum string

const (
	WorkerLifecycleEventEventEnumUnknownEvent               WorkerLifecycleEventEventEnum = "UNKNOWN_EVENT"
	WorkerLifecycleEventEventEnumOsStart                    WorkerLifecycleEventEventEnum = "OS_START"
	WorkerLifecycleEventEventEnumContainerStart             WorkerLifecycleEventEventEnum = "CONTAINER_START"
	WorkerLifecycleEventEventEnumNetworkUp                  WorkerLifecycleEventEventEnum = "NETWORK_UP"
	WorkerLifecycleEventEventEnumStagingFilesDownloadStart  WorkerLifecycleEventEventEnum = "STAGING_FILES_DOWNLOAD_START"
	WorkerLifecycleEventEventEnumStagingFilesDownloadFinish WorkerLifecycleEventEventEnum = "STAGING_FILES_DOWNLOAD_FINISH"
	WorkerLifecycleEventEventEnumSdkInstallStart            WorkerLifecycleEventEventEnum = "SDK_INSTALL_START"
	WorkerLifecycleEventEventEnumSdkInstallFinish           WorkerLifecycleEventEventEnum = "SDK_INSTALL_FINISH"
)

// WorkerLifecycleEvent
// A report of an event in a worker's lifecycle. The proto contains one event, because the worker is expected to asynchronously send each message immediately after the event. Due to this asynchrony, messages may arrive out of order (or missing), and it is up to the consumer to interpret. The timestamp of the event is in the enclosing WorkerMessage proto.
type WorkerLifecycleEvent struct {
	ContainerStartTime *string                        `json:"containerStartTime,omitempty"`
	Event              *WorkerLifecycleEventEventEnum `json:"event,omitempty"`
	Metadata           map[string]string              `json:"metadata,omitempty"`
}
