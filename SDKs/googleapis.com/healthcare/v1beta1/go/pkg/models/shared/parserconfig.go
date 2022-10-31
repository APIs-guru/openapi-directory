package shared




type ParserConfigVersionEnum string

const (
    ParserConfigVersionEnumParserVersionUnspecified ParserConfigVersionEnum = "PARSER_VERSION_UNSPECIFIED"
ParserConfigVersionEnumV1 ParserConfigVersionEnum = "V1"
ParserConfigVersionEnumV2 ParserConfigVersionEnum = "V2"
ParserConfigVersionEnumV3 ParserConfigVersionEnum = "V3"
)


type ParserConfig struct {
    AllowNullHeader *bool `json:"allowNullHeader,omitempty"`
    Schema *SchemaPackage `json:"schema,omitempty"`
    SegmentTerminator *string `json:"segmentTerminator,omitempty"`
    Version *ParserConfigVersionEnum `json:"version,omitempty"`
    
}

