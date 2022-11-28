import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfig } from "./loggingconfig";
import { NotificationConfig } from "./notificationconfig";
import { Schedule } from "./schedule";
import { TransferSpec } from "./transferspec";


export enum TransferJobStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Deleted = "DELETED"
}


// TransferJobInput
/** 
 * This resource represents the configuration of a transfer job that runs periodically.
**/
export class TransferJobInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=latestOperationName" })
  latestOperationName?: string;

  @SpeakeasyMetadata({ data: "json, name=loggingConfig" })
  loggingConfig?: LoggingConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationConfig" })
  notificationConfig?: NotificationConfig;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: Schedule;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TransferJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=transferSpec" })
  transferSpec?: TransferSpec;
}


// TransferJob
/** 
 * This resource represents the configuration of a transfer job that runs periodically.
**/
export class TransferJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deletionTime" })
  deletionTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModificationTime" })
  lastModificationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=latestOperationName" })
  latestOperationName?: string;

  @SpeakeasyMetadata({ data: "json, name=loggingConfig" })
  loggingConfig?: LoggingConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationConfig" })
  notificationConfig?: NotificationConfig;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: Schedule;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TransferJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=transferSpec" })
  transferSpec?: TransferSpec;
}
