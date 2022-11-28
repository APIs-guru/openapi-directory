import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CounterMetadataKindEnum {
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

export enum CounterMetadataStandardUnitsEnum {
    Bytes = "BYTES",
    BytesPerSec = "BYTES_PER_SEC",
    Milliseconds = "MILLISECONDS",
    Microseconds = "MICROSECONDS",
    Nanoseconds = "NANOSECONDS",
    TimestampMsec = "TIMESTAMP_MSEC",
    TimestampUsec = "TIMESTAMP_USEC",
    TimestampNsec = "TIMESTAMP_NSEC"
}


// CounterMetadata
/** 
 * CounterMetadata includes all static non-name non-value counter attributes.
**/
export class CounterMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: CounterMetadataKindEnum;

  @SpeakeasyMetadata({ data: "json, name=otherUnits" })
  otherUnits?: string;

  @SpeakeasyMetadata({ data: "json, name=standardUnits" })
  standardUnits?: CounterMetadataStandardUnitsEnum;
}
