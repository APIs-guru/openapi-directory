package shared

type QueryMetadataFormatEnum string

const (
	QueryMetadataFormatEnumFormatUnspecified QueryMetadataFormatEnum = "FORMAT_UNSPECIFIED"
	QueryMetadataFormatEnumCsv               QueryMetadataFormatEnum = "CSV"
	QueryMetadataFormatEnumXlsx              QueryMetadataFormatEnum = "XLSX"
)

type QueryMetadata struct {
	DataRange         *DataRange               `json:"dataRange"`
	Format            *QueryMetadataFormatEnum `json:"format"`
	SendNotification  *bool                    `json:"sendNotification"`
	ShareEmailAddress []string                 `json:"shareEmailAddress"`
	Title             *string                  `json:"title"`
}
