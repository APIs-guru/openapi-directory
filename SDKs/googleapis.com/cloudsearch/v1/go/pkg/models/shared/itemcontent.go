package shared

type ItemContentContentFormatEnum string

const (
	ItemContentContentFormatEnumUnspecified ItemContentContentFormatEnum = "UNSPECIFIED"
	ItemContentContentFormatEnumHTML        ItemContentContentFormatEnum = "HTML"
	ItemContentContentFormatEnumText        ItemContentContentFormatEnum = "TEXT"
	ItemContentContentFormatEnumRaw         ItemContentContentFormatEnum = "RAW"
)

type ItemContent struct {
	ContentDataRef *UploadItemRef                `json:"contentDataRef,omitempty"`
	ContentFormat  *ItemContentContentFormatEnum `json:"contentFormat,omitempty"`
	Hash           *string                       `json:"hash,omitempty"`
	InlineContent  *string                       `json:"inlineContent,omitempty"`
}
