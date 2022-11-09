import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoggingConfig } from "./loggingconfig";
import { NotificationConfig } from "./notificationconfig";
import { Schedule } from "./schedule";
import { TransferSpec } from "./transferspec";

export enum TransferJobStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED"
,    Enabled = "ENABLED"
,    Disabled = "DISABLED"
,    Deleted = "DELETED"
}


// TransferJob
/** 
 * This resource represents the configuration of a transfer job that runs periodically.
**/
export class TransferJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=deletionTime" })
  deletionTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=lastModificationTime" })
  lastModificationTime?: string;

  @Metadata({ data: "json, name=latestOperationName" })
  latestOperationName?: string;

  @Metadata({ data: "json, name=loggingConfig" })
  loggingConfig?: LoggingConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notificationConfig" })
  notificationConfig?: NotificationConfig;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=schedule" })
  schedule?: Schedule;

  @Metadata({ data: "json, name=status" })
  status?: TransferJobStatusEnum;

  @Metadata({ data: "json, name=transferSpec" })
  transferSpec?: TransferSpec;
}
