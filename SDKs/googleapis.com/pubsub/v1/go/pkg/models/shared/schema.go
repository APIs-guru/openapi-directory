package shared

type SchemaTypeEnum string

const (
	SchemaTypeEnumTypeUnspecified SchemaTypeEnum = "TYPE_UNSPECIFIED"
	SchemaTypeEnumProtocolBuffer  SchemaTypeEnum = "PROTOCOL_BUFFER"
	SchemaTypeEnumAvro            SchemaTypeEnum = "AVRO"
)

type Schema struct {
	Definition         *string         `json:"definition"`
	Name               *string         `json:"name"`
	RevisionCreateTime *string         `json:"revisionCreateTime"`
	RevisionID         *string         `json:"revisionId"`
	Type               *SchemaTypeEnum `json:"type"`
}
