package shared

type GroupsExportOptionsExportFormatEnum string

const (
	GroupsExportOptionsExportFormatEnumExportFormatUnspecified GroupsExportOptionsExportFormatEnum = "EXPORT_FORMAT_UNSPECIFIED"
	GroupsExportOptionsExportFormatEnumMbox                    GroupsExportOptionsExportFormatEnum = "MBOX"
	GroupsExportOptionsExportFormatEnumPst                     GroupsExportOptionsExportFormatEnum = "PST"
)

type GroupsExportOptions struct {
	ExportFormat *GroupsExportOptionsExportFormatEnum `json:"exportFormat,omitempty"`
}
