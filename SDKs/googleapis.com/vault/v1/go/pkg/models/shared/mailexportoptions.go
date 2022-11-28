package shared

type MailExportOptionsExportFormatEnum string

const (
	MailExportOptionsExportFormatEnumExportFormatUnspecified MailExportOptionsExportFormatEnum = "EXPORT_FORMAT_UNSPECIFIED"
	MailExportOptionsExportFormatEnumMbox                    MailExportOptionsExportFormatEnum = "MBOX"
	MailExportOptionsExportFormatEnumPst                     MailExportOptionsExportFormatEnum = "PST"
)

// MailExportOptions
// Options for Gmail exports.
type MailExportOptions struct {
	ExportFormat                *MailExportOptionsExportFormatEnum `json:"exportFormat,omitempty"`
	ShowConfidentialModeContent *bool                              `json:"showConfidentialModeContent,omitempty"`
	UseNewExport                *bool                              `json:"useNewExport,omitempty"`
}
