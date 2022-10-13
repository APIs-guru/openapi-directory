package shared

type APISyntaxEnum string

const (
	APISyntaxEnumSyntaxProto2 APISyntaxEnum = "SYNTAX_PROTO2"
	APISyntaxEnumSyntaxProto3 APISyntaxEnum = "SYNTAX_PROTO3"
)

type API struct {
	Methods       []Method       `json:"methods"`
	Mixins        []Mixin        `json:"mixins"`
	Name          *string        `json:"name"`
	Options       []Option       `json:"options"`
	SourceContext *SourceContext `json:"sourceContext"`
	Syntax        *APISyntaxEnum `json:"syntax"`
	Version       *string        `json:"version"`
}
