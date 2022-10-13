package shared

type ParserConfigVersionEnum string

const (
	ParserConfigVersionEnumParserVersionUnspecified ParserConfigVersionEnum = "PARSER_VERSION_UNSPECIFIED"
	ParserConfigVersionEnumV1                       ParserConfigVersionEnum = "V1"
	ParserConfigVersionEnumV2                       ParserConfigVersionEnum = "V2"
)

type ParserConfig struct {
	AllowNullHeader   *bool                    `json:"allowNullHeader"`
	Schema            *SchemaPackage           `json:"schema"`
	SegmentTerminator *string                  `json:"segmentTerminator"`
	Version           *ParserConfigVersionEnum `json:"version"`
}
