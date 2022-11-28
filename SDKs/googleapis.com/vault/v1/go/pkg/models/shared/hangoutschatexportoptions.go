package shared

type HangoutsChatExportOptionsExportFormatEnum string

const (
	HangoutsChatExportOptionsExportFormatEnumExportFormatUnspecified HangoutsChatExportOptionsExportFormatEnum = "EXPORT_FORMAT_UNSPECIFIED"
	HangoutsChatExportOptionsExportFormatEnumMbox                    HangoutsChatExportOptionsExportFormatEnum = "MBOX"
	HangoutsChatExportOptionsExportFormatEnumPst                     HangoutsChatExportOptionsExportFormatEnum = "PST"
)

// HangoutsChatExportOptions
// Options for Chat exports.
type HangoutsChatExportOptions struct {
	ExportFormat *HangoutsChatExportOptionsExportFormatEnum `json:"exportFormat,omitempty"`
}
