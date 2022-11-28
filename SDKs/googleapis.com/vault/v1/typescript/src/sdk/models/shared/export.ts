import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudStorageSink } from "./cloudstoragesink";
import { ExportOptions } from "./exportoptions";
import { Query } from "./query";
import { UserInfo } from "./userinfo";
import { ExportStats } from "./exportstats";


export enum ExportStatusEnum {
    ExportStatusUnspecified = "EXPORT_STATUS_UNSPECIFIED",
    Completed = "COMPLETED",
    Failed = "FAILED",
    InProgress = "IN_PROGRESS"
}


// Export
/** 
 * An export. To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
**/
export class Export extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudStorageSink" })
  cloudStorageSink?: CloudStorageSink;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=exportOptions" })
  exportOptions?: ExportOptions;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=matterId" })
  matterId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: Query;

  @SpeakeasyMetadata({ data: "json, name=requester" })
  requester?: UserInfo;

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats?: ExportStats;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ExportStatusEnum;
}
