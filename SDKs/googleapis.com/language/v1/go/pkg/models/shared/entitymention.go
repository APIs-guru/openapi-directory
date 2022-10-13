package shared

type EntityMentionTypeEnum string

const (
	EntityMentionTypeEnumTypeUnknown EntityMentionTypeEnum = "TYPE_UNKNOWN"
	EntityMentionTypeEnumProper      EntityMentionTypeEnum = "PROPER"
	EntityMentionTypeEnumCommon      EntityMentionTypeEnum = "COMMON"
)

type EntityMention struct {
	Sentiment *Sentiment             `json:"sentiment"`
	Text      *TextSpan              `json:"text"`
	Type      *EntityMentionTypeEnum `json:"type"`
}
