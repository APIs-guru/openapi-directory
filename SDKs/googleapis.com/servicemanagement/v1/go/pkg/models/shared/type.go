package shared

type TypeSyntaxEnum string

const (
	TypeSyntaxEnumSyntaxProto2 TypeSyntaxEnum = "SYNTAX_PROTO2"
	TypeSyntaxEnumSyntaxProto3 TypeSyntaxEnum = "SYNTAX_PROTO3"
)

type Type struct {
	Fields        []Field         `json:"fields,omitempty"`
	Name          *string         `json:"name,omitempty"`
	Oneofs        []string        `json:"oneofs,omitempty"`
	Options       []Option        `json:"options,omitempty"`
	SourceContext *SourceContext  `json:"sourceContext,omitempty"`
	Syntax        *TypeSyntaxEnum `json:"syntax,omitempty"`
}
