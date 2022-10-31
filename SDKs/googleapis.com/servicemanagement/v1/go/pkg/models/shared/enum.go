package shared




type EnumSyntaxEnum string

const (
    EnumSyntaxEnumSyntaxProto2 EnumSyntaxEnum = "SYNTAX_PROTO2"
EnumSyntaxEnumSyntaxProto3 EnumSyntaxEnum = "SYNTAX_PROTO3"
)


type Enum struct {
    Enumvalue []EnumValue `json:"enumvalue,omitempty"`
    Name *string `json:"name,omitempty"`
    Options []Option `json:"options,omitempty"`
    SourceContext *SourceContext `json:"sourceContext,omitempty"`
    Syntax *EnumSyntaxEnum `json:"syntax,omitempty"`
    
}

