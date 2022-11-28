package shared

type APISyntaxEnum string

const (
	APISyntaxEnumSyntaxProto2 APISyntaxEnum = "SYNTAX_PROTO2"
	APISyntaxEnumSyntaxProto3 APISyntaxEnum = "SYNTAX_PROTO3"
)

// API
// Api is a light-weight descriptor for an API Interface. Interfaces are also described as "protocol buffer services" in some contexts, such as by the "service" keyword in a .proto file, but they are different from API Services, which represent a concrete implementation of an interface as opposed to simply a description of methods and bindings. They are also sometimes simply referred to as "APIs" in other contexts, such as the name of this message itself. See https://cloud.google.com/apis/design/glossary for detailed terminology.
type API struct {
	Methods       []Method       `json:"methods,omitempty"`
	Mixins        []Mixin        `json:"mixins,omitempty"`
	Name          *string        `json:"name,omitempty"`
	Options       []Option       `json:"options,omitempty"`
	SourceContext *SourceContext `json:"sourceContext,omitempty"`
	Syntax        *APISyntaxEnum `json:"syntax,omitempty"`
	Version       *string        `json:"version,omitempty"`
}
