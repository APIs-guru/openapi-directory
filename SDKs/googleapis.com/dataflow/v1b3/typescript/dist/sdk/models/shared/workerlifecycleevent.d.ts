import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WorkerLifecycleEventEventEnum {
    UnknownEvent = "UNKNOWN_EVENT",
    OsStart = "OS_START",
    ContainerStart = "CONTAINER_START",
    NetworkUp = "NETWORK_UP",
    StagingFilesDownloadStart = "STAGING_FILES_DOWNLOAD_START",
    StagingFilesDownloadFinish = "STAGING_FILES_DOWNLOAD_FINISH",
    SdkInstallStart = "SDK_INSTALL_START",
    SdkInstallFinish = "SDK_INSTALL_FINISH"
}
/**
 * A report of an event in a worker's lifecycle. The proto contains one event, because the worker is expected to asynchronously send each message immediately after the event. Due to this asynchrony, messages may arrive out of order (or missing), and it is up to the consumer to interpret. The timestamp of the event is in the enclosing WorkerMessage proto.
**/
export declare class WorkerLifecycleEvent extends SpeakeasyBase {
    containerStartTime?: string;
    event?: WorkerLifecycleEventEventEnum;
    metadata?: Map<string, string>;
}
