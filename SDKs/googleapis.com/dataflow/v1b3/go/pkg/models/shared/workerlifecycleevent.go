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

type WorkerLifecycleEvent struct {
	ContainerStartTime *string                        `json:"containerStartTime,omitempty"`
	Event              *WorkerLifecycleEventEventEnum `json:"event,omitempty"`
	Metadata           map[string]string              `json:"metadata,omitempty"`
}
