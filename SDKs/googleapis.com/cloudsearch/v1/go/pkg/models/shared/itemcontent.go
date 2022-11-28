package shared

type ItemContentContentFormatEnum string

const (
	ItemContentContentFormatEnumUnspecified ItemContentContentFormatEnum = "UNSPECIFIED"
	ItemContentContentFormatEnumHTML        ItemContentContentFormatEnum = "HTML"
	ItemContentContentFormatEnumText        ItemContentContentFormatEnum = "TEXT"
	ItemContentContentFormatEnumRaw         ItemContentContentFormatEnum = "RAW"
)

// ItemContent
// Content of an item to be indexed and surfaced by Cloud Search. Only UTF-8 encoded strings are allowed as inlineContent. If the content is uploaded and not binary, it must be UTF-8 encoded.
type ItemContent struct {
	ContentDataRef *UploadItemRef                `json:"contentDataRef,omitempty"`
	ContentFormat  *ItemContentContentFormatEnum `json:"contentFormat,omitempty"`
	Hash           *string                       `json:"hash,omitempty"`
	InlineContent  *string                       `json:"inlineContent,omitempty"`
}
