package shared

type TextEntryTypeEnum string

const (
	TextEntryTypeEnumTextTypeUnspecified TextEntryTypeEnum = "TEXT_TYPE_UNSPECIFIED"
	TextEntryTypeEnumPlainText           TextEntryTypeEnum = "PLAIN_TEXT"
	TextEntryTypeEnumHTML                TextEntryTypeEnum = "HTML"
)

type TextEntry struct {
	Text *string            `json:"text"`
	Type *TextEntryTypeEnum `json:"type"`
}
