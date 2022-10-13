package shared

type HangoutsChatExportOptionsExportFormatEnum string

const (
	HangoutsChatExportOptionsExportFormatEnumExportFormatUnspecified HangoutsChatExportOptionsExportFormatEnum = "EXPORT_FORMAT_UNSPECIFIED"
	HangoutsChatExportOptionsExportFormatEnumMbox                    HangoutsChatExportOptionsExportFormatEnum = "MBOX"
	HangoutsChatExportOptionsExportFormatEnumPst                     HangoutsChatExportOptionsExportFormatEnum = "PST"
)

type HangoutsChatExportOptions struct {
	ExportFormat *HangoutsChatExportOptionsExportFormatEnum `json:"exportFormat"`
}
