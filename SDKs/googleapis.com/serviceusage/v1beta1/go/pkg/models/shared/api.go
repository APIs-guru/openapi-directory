package shared




type APISyntaxEnum string

const (
    APISyntaxEnumSyntaxProto2 APISyntaxEnum = "SYNTAX_PROTO2"
APISyntaxEnumSyntaxProto3 APISyntaxEnum = "SYNTAX_PROTO3"
)


type API struct {
    Methods []Method `json:"methods,omitempty"`
    Mixins []Mixin `json:"mixins,omitempty"`
    Name *string `json:"name,omitempty"`
    Options []Option `json:"options,omitempty"`
    SourceContext *SourceContext `json:"sourceContext,omitempty"`
    Syntax *APISyntaxEnum `json:"syntax,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

