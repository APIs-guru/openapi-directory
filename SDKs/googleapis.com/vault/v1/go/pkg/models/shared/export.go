package shared

type ExportStatusEnum string

const (
	ExportStatusEnumExportStatusUnspecified ExportStatusEnum = "EXPORT_STATUS_UNSPECIFIED"
	ExportStatusEnumCompleted               ExportStatusEnum = "COMPLETED"
	ExportStatusEnumFailed                  ExportStatusEnum = "FAILED"
	ExportStatusEnumInProgress              ExportStatusEnum = "IN_PROGRESS"
)

// Export
// An export. To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
type Export struct {
	CloudStorageSink *CloudStorageSink `json:"cloudStorageSink,omitempty"`
	CreateTime       *string           `json:"createTime,omitempty"`
	ExportOptions    *ExportOptions    `json:"exportOptions,omitempty"`
	ID               *string           `json:"id,omitempty"`
	MatterID         *string           `json:"matterId,omitempty"`
	Name             *string           `json:"name,omitempty"`
	Query            *Query            `json:"query,omitempty"`
	Requester        *UserInfo         `json:"requester,omitempty"`
	Stats            *ExportStats      `json:"stats,omitempty"`
	Status           *ExportStatusEnum `json:"status,omitempty"`
}
