package shared




type EntityMentionTypeEnum string

const (
    EntityMentionTypeEnumTypeUnknown EntityMentionTypeEnum = "TYPE_UNKNOWN"
EntityMentionTypeEnumProper EntityMentionTypeEnum = "PROPER"
EntityMentionTypeEnumCommon EntityMentionTypeEnum = "COMMON"
)


type EntityMention struct {
    Text *TextSpan `json:"text,omitempty"`
    Type *EntityMentionTypeEnum `json:"type,omitempty"`
    
}

