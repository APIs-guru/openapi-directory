package shared

type MethodSyntaxEnum string

const (
	MethodSyntaxEnumSyntaxProto2 MethodSyntaxEnum = "SYNTAX_PROTO2"
	MethodSyntaxEnumSyntaxProto3 MethodSyntaxEnum = "SYNTAX_PROTO3"
)

type Method struct {
	Name              *string           `json:"name"`
	Options           []Option          `json:"options"`
	RequestStreaming  *bool             `json:"requestStreaming"`
	RequestTypeURL    *string           `json:"requestTypeUrl"`
	ResponseStreaming *bool             `json:"responseStreaming"`
	ResponseTypeURL   *string           `json:"responseTypeUrl"`
	Syntax            *MethodSyntaxEnum `json:"syntax"`
}
