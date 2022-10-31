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
	DropUnknownFields *bool                    `json:"dropUnknownFields,omitempty"`
	State             *BigQueryConfigStateEnum `json:"state,omitempty"`
	Table             *string                  `json:"table,omitempty"`
	UseTopicSchema    *bool                    `json:"useTopicSchema,omitempty"`
	WriteMetadata     *bool                    `json:"writeMetadata,omitempty"`
}
