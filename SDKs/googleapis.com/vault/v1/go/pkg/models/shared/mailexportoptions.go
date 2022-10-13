package shared

type MailExportOptionsExportFormatEnum string

const (
	MailExportOptionsExportFormatEnumExportFormatUnspecified MailExportOptionsExportFormatEnum = "EXPORT_FORMAT_UNSPECIFIED"
	MailExportOptionsExportFormatEnumMbox                    MailExportOptionsExportFormatEnum = "MBOX"
	MailExportOptionsExportFormatEnumPst                     MailExportOptionsExportFormatEnum = "PST"
)

type MailExportOptions struct {
	ExportFormat                *MailExportOptionsExportFormatEnum `json:"exportFormat"`
	ShowConfidentialModeContent *bool                              `json:"showConfidentialModeContent"`
	UseNewExport                *bool                              `json:"useNewExport"`
}
