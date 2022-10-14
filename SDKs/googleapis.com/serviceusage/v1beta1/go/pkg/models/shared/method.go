package shared

type MethodSyntaxEnum string

const (
	MethodSyntaxEnumSyntaxProto2 MethodSyntaxEnum = "SYNTAX_PROTO2"
	MethodSyntaxEnumSyntaxProto3 MethodSyntaxEnum = "SYNTAX_PROTO3"
)

type Method struct {
	Name              *string           `json:"name,omitempty"`
	Options           []Option          `json:"options,omitempty"`
	RequestStreaming  *bool             `json:"requestStreaming,omitempty"`
	RequestTypeURL    *string           `json:"requestTypeUrl,omitempty"`
	ResponseStreaming *bool             `json:"responseStreaming,omitempty"`
	ResponseTypeURL   *string           `json:"responseTypeUrl,omitempty"`
	Syntax            *MethodSyntaxEnum `json:"syntax,omitempty"`
}
