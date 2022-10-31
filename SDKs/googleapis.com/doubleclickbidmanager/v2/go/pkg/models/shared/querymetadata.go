package shared




type QueryMetadataFormatEnum string

const (
    QueryMetadataFormatEnumFormatUnspecified QueryMetadataFormatEnum = "FORMAT_UNSPECIFIED"
QueryMetadataFormatEnumCsv QueryMetadataFormatEnum = "CSV"
QueryMetadataFormatEnumXlsx QueryMetadataFormatEnum = "XLSX"
)


type QueryMetadata struct {
    DataRange *DataRange `json:"dataRange,omitempty"`
    Format *QueryMetadataFormatEnum `json:"format,omitempty"`
    SendNotification *bool `json:"sendNotification,omitempty"`
    ShareEmailAddress []string `json:"shareEmailAddress,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

