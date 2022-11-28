package shared

type TextFormatEnum string

const (
	TextFormatEnumFormatUnspecified TextFormatEnum = "FORMAT_UNSPECIFIED"
	TextFormatEnumMarkdown          TextFormatEnum = "MARKDOWN"
	TextFormatEnumRaw               TextFormatEnum = "RAW"
)

// Text
// A widget that displays textual content.
type Text struct {
	Content *string         `json:"content,omitempty"`
	Format  *TextFormatEnum `json:"format,omitempty"`
}
