package shared

type EntityMentionTypeEnum string

const (
	EntityMentionTypeEnumTypeUnknown EntityMentionTypeEnum = "TYPE_UNKNOWN"
	EntityMentionTypeEnumProper      EntityMentionTypeEnum = "PROPER"
	EntityMentionTypeEnumCommon      EntityMentionTypeEnum = "COMMON"
)

// EntityMention
// Represents a mention for an entity in the text. Currently, proper noun mentions are supported.
type EntityMention struct {
	Text *TextSpan              `json:"text,omitempty"`
	Type *EntityMentionTypeEnum `json:"type,omitempty"`
}
