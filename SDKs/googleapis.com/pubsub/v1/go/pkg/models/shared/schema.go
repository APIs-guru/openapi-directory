package shared




type SchemaTypeEnum string

const (
    SchemaTypeEnumTypeUnspecified SchemaTypeEnum = "TYPE_UNSPECIFIED"
SchemaTypeEnumProtocolBuffer SchemaTypeEnum = "PROTOCOL_BUFFER"
SchemaTypeEnumAvro SchemaTypeEnum = "AVRO"
)


type Schema struct {
    Definition *string `json:"definition,omitempty"`
    Name *string `json:"name,omitempty"`
    RevisionCreateTime *string `json:"revisionCreateTime,omitempty"`
    RevisionID *string `json:"revisionId,omitempty"`
    Type *SchemaTypeEnum `json:"type,omitempty"`
    
}

