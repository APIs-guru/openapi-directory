import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TimePartitioningTypeEnum {
    PartitionTypeUnspecified = "PARTITION_TYPE_UNSPECIFIED",
    Hour = "HOUR",
    Day = "DAY",
    Month = "MONTH",
    Year = "YEAR"
}


// TimePartitioning
/** 
 * Configuration for FHIR BigQuery time-partitioned tables.
**/
export class TimePartitioning extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expirationMs" })
  expirationMs?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: TimePartitioningTypeEnum;
}
