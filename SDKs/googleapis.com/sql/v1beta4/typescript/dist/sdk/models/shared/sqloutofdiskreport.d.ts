import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SqlOutOfDiskReportSqlOutOfDiskStateEnum {
    SqlOutOfDiskStateUnspecified = "SQL_OUT_OF_DISK_STATE_UNSPECIFIED",
    Normal = "NORMAL",
    SoftShutdown = "SOFT_SHUTDOWN"
}
/**
 * This message wraps up the information written by out-of-disk detection job.
**/
export declare class SqlOutOfDiskReport extends SpeakeasyBase {
    sqlMinRecommendedIncreaseSizeGb?: number;
    sqlOutOfDiskState?: SqlOutOfDiskReportSqlOutOfDiskStateEnum;
}
