import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfig } from "./loggingconfig";
import { NotificationConfig } from "./notificationconfig";
import { Schedule } from "./schedule";
import { TransferSpec } from "./transferspec";
export declare enum TransferJobStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Deleted = "DELETED"
}
/**
 * This resource represents the configuration of a transfer job that runs periodically.
**/
export declare class TransferJobInput extends SpeakeasyBase {
    description?: string;
    latestOperationName?: string;
    loggingConfig?: LoggingConfig;
    name?: string;
    notificationConfig?: NotificationConfig;
    projectId?: string;
    schedule?: Schedule;
    status?: TransferJobStatusEnum;
    transferSpec?: TransferSpec;
}
/**
 * This resource represents the configuration of a transfer job that runs periodically.
**/
export declare class TransferJob extends SpeakeasyBase {
    creationTime?: string;
    deletionTime?: string;
    description?: string;
    lastModificationTime?: string;
    latestOperationName?: string;
    loggingConfig?: LoggingConfig;
    name?: string;
    notificationConfig?: NotificationConfig;
    projectId?: string;
    schedule?: Schedule;
    status?: TransferJobStatusEnum;
    transferSpec?: TransferSpec;
}
