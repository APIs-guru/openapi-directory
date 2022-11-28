package shared

type VoiceExportOptionsExportFormatEnum string

const (
	VoiceExportOptionsExportFormatEnumExportFormatUnspecified VoiceExportOptionsExportFormatEnum = "EXPORT_FORMAT_UNSPECIFIED"
	VoiceExportOptionsExportFormatEnumMbox                    VoiceExportOptionsExportFormatEnum = "MBOX"
	VoiceExportOptionsExportFormatEnumPst                     VoiceExportOptionsExportFormatEnum = "PST"
)

// VoiceExportOptions
// The options for Voice exports.
type VoiceExportOptions struct {
	ExportFormat *VoiceExportOptionsExportFormatEnum `json:"exportFormat,omitempty"`
}
