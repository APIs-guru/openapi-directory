import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudStorageSink } from "./cloudstoragesink";
import { ExportOptions } from "./exportoptions";
import { Query } from "./query";
import { UserInfo } from "./userinfo";
import { ExportStats } from "./exportstats";
export declare enum ExportStatusEnum {
    ExportStatusUnspecified = "EXPORT_STATUS_UNSPECIFIED",
    Completed = "COMPLETED",
    Failed = "FAILED",
    InProgress = "IN_PROGRESS"
}
/**
 * An export. To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
**/
export declare class Export extends SpeakeasyBase {
    cloudStorageSink?: CloudStorageSink;
    createTime?: string;
    exportOptions?: ExportOptions;
    id?: string;
    matterId?: string;
    name?: string;
    query?: Query;
    requester?: UserInfo;
    stats?: ExportStats;
    status?: ExportStatusEnum;
}
