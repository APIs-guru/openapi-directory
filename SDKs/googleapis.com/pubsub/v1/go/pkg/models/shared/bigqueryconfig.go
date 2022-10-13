package shared

type BigQueryConfigStateEnum string

const (
	BigQueryConfigStateEnumStateUnspecified BigQueryConfigStateEnum = "STATE_UNSPECIFIED"
	BigQueryConfigStateEnumActive           BigQueryConfigStateEnum = "ACTIVE"
	BigQueryConfigStateEnumPermissionDenied BigQueryConfigStateEnum = "PERMISSION_DENIED"
	BigQueryConfigStateEnumNotFound         BigQueryConfigStateEnum = "NOT_FOUND"
	BigQueryConfigStateEnumSchemaMismatch   BigQueryConfigStateEnum = "SCHEMA_MISMATCH"
)

type BigQueryConfig struct {
	DropUnknownFields *bool                    `json:"dropUnknownFields"`
	State             *BigQueryConfigStateEnum `json:"state"`
	Table             *string                  `json:"table"`
	UseTopicSchema    *bool                    `json:"useTopicSchema"`
	WriteMetadata     *bool                    `json:"writeMetadata"`
}
