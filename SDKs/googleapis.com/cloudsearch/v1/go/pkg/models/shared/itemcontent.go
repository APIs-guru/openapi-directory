package shared

type ItemContentContentFormatEnum string

const (
	ItemContentContentFormatEnumUnspecified ItemContentContentFormatEnum = "UNSPECIFIED"
	ItemContentContentFormatEnumHTML        ItemContentContentFormatEnum = "HTML"
	ItemContentContentFormatEnumText        ItemContentContentFormatEnum = "TEXT"
	ItemContentContentFormatEnumRaw         ItemContentContentFormatEnum = "RAW"
)

type ItemContent struct {
	ContentDataRef *UploadItemRef                `json:"contentDataRef"`
	ContentFormat  *ItemContentContentFormatEnum `json:"contentFormat"`
	Hash           *string                       `json:"hash"`
	InlineContent  *string                       `json:"inlineContent"`
}
