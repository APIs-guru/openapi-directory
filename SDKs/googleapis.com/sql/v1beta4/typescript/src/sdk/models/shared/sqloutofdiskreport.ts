import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SqlOutOfDiskReportSqlOutOfDiskStateEnum {
    SqlOutOfDiskStateUnspecified = "SQL_OUT_OF_DISK_STATE_UNSPECIFIED"
,    Normal = "NORMAL"
,    SoftShutdown = "SOFT_SHUTDOWN"
}


// SqlOutOfDiskReport
/** 
 * This message wraps up the information written by out-of-disk detection job.
**/
export class SqlOutOfDiskReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=sqlMinRecommendedIncreaseSizeGb" })
  sqlMinRecommendedIncreaseSizeGb?: number;

  @Metadata({ data: "json, name=sqlOutOfDiskState" })
  sqlOutOfDiskState?: SqlOutOfDiskReportSqlOutOfDiskStateEnum;
}
