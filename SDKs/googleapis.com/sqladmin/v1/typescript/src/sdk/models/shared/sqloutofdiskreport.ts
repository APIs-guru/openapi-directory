import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SqlOutOfDiskReportSqlOutOfDiskStateEnum {
    SqlOutOfDiskStateUnspecified = "SQL_OUT_OF_DISK_STATE_UNSPECIFIED",
    Normal = "NORMAL",
    SoftShutdown = "SOFT_SHUTDOWN"
}


// SqlOutOfDiskReport
/** 
 * This message wraps up the information written by out-of-disk detection job.
**/
export class SqlOutOfDiskReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sqlMinRecommendedIncreaseSizeGb" })
  sqlMinRecommendedIncreaseSizeGb?: number;

  @SpeakeasyMetadata({ data: "json, name=sqlOutOfDiskState" })
  sqlOutOfDiskState?: SqlOutOfDiskReportSqlOutOfDiskStateEnum;
}
