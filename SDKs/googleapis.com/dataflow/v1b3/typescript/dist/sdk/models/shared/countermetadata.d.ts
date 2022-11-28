import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CounterMetadataKindEnum {
    Invalid = "INVALID",
    Sum = "SUM",
    Max = "MAX",
    Min = "MIN",
    Mean = "MEAN",
    Or = "OR",
    And = "AND",
    Set = "SET",
    Distribution = "DISTRIBUTION",
    LatestValue = "LATEST_VALUE"
}
export declare enum CounterMetadataStandardUnitsEnum {
    Bytes = "BYTES",
    BytesPerSec = "BYTES_PER_SEC",
    Milliseconds = "MILLISECONDS",
    Microseconds = "MICROSECONDS",
    Nanoseconds = "NANOSECONDS",
    TimestampMsec = "TIMESTAMP_MSEC",
    TimestampUsec = "TIMESTAMP_USEC",
    TimestampNsec = "TIMESTAMP_NSEC"
}
/**
 * CounterMetadata includes all static non-name non-value counter attributes.
**/
export declare class CounterMetadata extends SpeakeasyBase {
    description?: string;
    kind?: CounterMetadataKindEnum;
    otherUnits?: string;
    standardUnits?: CounterMetadataStandardUnitsEnum;
}
