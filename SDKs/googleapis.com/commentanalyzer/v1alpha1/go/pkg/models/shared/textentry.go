package shared

type TextEntryTypeEnum string

const (
	TextEntryTypeEnumTextTypeUnspecified TextEntryTypeEnum = "TEXT_TYPE_UNSPECIFIED"
	TextEntryTypeEnumPlainText           TextEntryTypeEnum = "PLAIN_TEXT"
	TextEntryTypeEnumHTML                TextEntryTypeEnum = "HTML"
)

// TextEntry
// Represents a body of text.
type TextEntry struct {
	Text *string            `json:"text,omitempty"`
	Type *TextEntryTypeEnum `json:"type,omitempty"`
}
