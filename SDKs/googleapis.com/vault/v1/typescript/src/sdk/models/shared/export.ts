import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudStorageSink } from "./cloudstoragesink";
import { ExportOptions } from "./exportoptions";
import { Query } from "./query";
import { UserInfo } from "./userinfo";
import { ExportStats } from "./exportstats";

export enum ExportStatusEnum {
    ExportStatusUnspecified = "EXPORT_STATUS_UNSPECIFIED"
,    Completed = "COMPLETED"
,    Failed = "FAILED"
,    InProgress = "IN_PROGRESS"
}


// Export
/** 
 * An export. To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
**/
export class Export extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudStorageSink" })
  cloudStorageSink?: CloudStorageSink;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=exportOptions" })
  exportOptions?: ExportOptions;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=matterId" })
  matterId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=query" })
  query?: Query;

  @Metadata({ data: "json, name=requester" })
  requester?: UserInfo;

  @Metadata({ data: "json, name=stats" })
  stats?: ExportStats;

  @Metadata({ data: "json, name=status" })
  status?: ExportStatusEnum;
}
