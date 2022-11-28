import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TimePartitioningTypeEnum {
    PartitionTypeUnspecified = "PARTITION_TYPE_UNSPECIFIED",
    Hour = "HOUR",
    Day = "DAY",
    Month = "MONTH",
    Year = "YEAR"
}
/**
 * Configuration for FHIR BigQuery time-partitioned tables.
**/
export declare class TimePartitioning extends SpeakeasyBase {
    expirationMs?: string;
    type?: TimePartitioningTypeEnum;
}
