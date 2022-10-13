package shared

type EnumSyntaxEnum string

const (
	EnumSyntaxEnumSyntaxProto2 EnumSyntaxEnum = "SYNTAX_PROTO2"
	EnumSyntaxEnumSyntaxProto3 EnumSyntaxEnum = "SYNTAX_PROTO3"
)

type Enum struct {
	Enumvalue     []EnumValue     `json:"enumvalue"`
	Name          *string         `json:"name"`
	Options       []Option        `json:"options"`
	SourceContext *SourceContext  `json:"sourceContext"`
	Syntax        *EnumSyntaxEnum `json:"syntax"`
}
