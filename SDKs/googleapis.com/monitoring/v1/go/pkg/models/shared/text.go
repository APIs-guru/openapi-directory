package shared

type TextFormatEnum string

const (
	TextFormatEnumFormatUnspecified TextFormatEnum = "FORMAT_UNSPECIFIED"
	TextFormatEnumMarkdown          TextFormatEnum = "MARKDOWN"
	TextFormatEnumRaw               TextFormatEnum = "RAW"
)

type Text struct {
	Content *string         `json:"content"`
	Format  *TextFormatEnum `json:"format"`
}
