package shared




type CounterMetadataKindEnum string

const (
    CounterMetadataKindEnumInvalid CounterMetadataKindEnum = "INVALID"
CounterMetadataKindEnumSum CounterMetadataKindEnum = "SUM"
CounterMetadataKindEnumMax CounterMetadataKindEnum = "MAX"
CounterMetadataKindEnumMin CounterMetadataKindEnum = "MIN"
CounterMetadataKindEnumMean CounterMetadataKindEnum = "MEAN"
CounterMetadataKindEnumOr CounterMetadataKindEnum = "OR"
CounterMetadataKindEnumAnd CounterMetadataKindEnum = "AND"
CounterMetadataKindEnumSet CounterMetadataKindEnum = "SET"
CounterMetadataKindEnumDistribution CounterMetadataKindEnum = "DISTRIBUTION"
CounterMetadataKindEnumLatestValue CounterMetadataKindEnum = "LATEST_VALUE"
)



type CounterMetadataStandardUnitsEnum string

const (
    CounterMetadataStandardUnitsEnumBytes CounterMetadataStandardUnitsEnum = "BYTES"
CounterMetadataStandardUnitsEnumBytesPerSec CounterMetadataStandardUnitsEnum = "BYTES_PER_SEC"
CounterMetadataStandardUnitsEnumMilliseconds CounterMetadataStandardUnitsEnum = "MILLISECONDS"
CounterMetadataStandardUnitsEnumMicroseconds CounterMetadataStandardUnitsEnum = "MICROSECONDS"
CounterMetadataStandardUnitsEnumNanoseconds CounterMetadataStandardUnitsEnum = "NANOSECONDS"
CounterMetadataStandardUnitsEnumTimestampMsec CounterMetadataStandardUnitsEnum = "TIMESTAMP_MSEC"
CounterMetadataStandardUnitsEnumTimestampUsec CounterMetadataStandardUnitsEnum = "TIMESTAMP_USEC"
CounterMetadataStandardUnitsEnumTimestampNsec CounterMetadataStandardUnitsEnum = "TIMESTAMP_NSEC"
)


type CounterMetadata struct {
    Description *string `json:"description,omitempty"`
    Kind *CounterMetadataKindEnum `json:"kind,omitempty"`
    OtherUnits *string `json:"otherUnits,omitempty"`
    StandardUnits *CounterMetadataStandardUnitsEnum `json:"standardUnits,omitempty"`
    
}

