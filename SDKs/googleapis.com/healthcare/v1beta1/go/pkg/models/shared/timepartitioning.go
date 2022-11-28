package shared

type TimePartitioningTypeEnum string

const (
	TimePartitioningTypeEnumPartitionTypeUnspecified TimePartitioningTypeEnum = "PARTITION_TYPE_UNSPECIFIED"
	TimePartitioningTypeEnumHour                     TimePartitioningTypeEnum = "HOUR"
	TimePartitioningTypeEnumDay                      TimePartitioningTypeEnum = "DAY"
	TimePartitioningTypeEnumMonth                    TimePartitioningTypeEnum = "MONTH"
	TimePartitioningTypeEnumYear                     TimePartitioningTypeEnum = "YEAR"
)

// TimePartitioning
// Configuration for FHIR BigQuery time-partitioned tables.
type TimePartitioning struct {
	ExpirationMs *string                   `json:"expirationMs,omitempty"`
	Type         *TimePartitioningTypeEnum `json:"type,omitempty"`
}
