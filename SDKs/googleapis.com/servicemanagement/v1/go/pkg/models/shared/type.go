package shared

type TypeSyntaxEnum string

const (
	TypeSyntaxEnumSyntaxProto2 TypeSyntaxEnum = "SYNTAX_PROTO2"
	TypeSyntaxEnumSyntaxProto3 TypeSyntaxEnum = "SYNTAX_PROTO3"
)

type Type struct {
	Fields        []Field         `json:"fields"`
	Name          *string         `json:"name"`
	Oneofs        []string        `json:"oneofs"`
	Options       []Option        `json:"options"`
	SourceContext *SourceContext  `json:"sourceContext"`
	Syntax        *TypeSyntaxEnum `json:"syntax"`
}
