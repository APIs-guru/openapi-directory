package shared

type ExportStatusEnum string

const (
	ExportStatusEnumExportStatusUnspecified ExportStatusEnum = "EXPORT_STATUS_UNSPECIFIED"
	ExportStatusEnumCompleted               ExportStatusEnum = "COMPLETED"
	ExportStatusEnumFailed                  ExportStatusEnum = "FAILED"
	ExportStatusEnumInProgress              ExportStatusEnum = "IN_PROGRESS"
)

type Export struct {
	CloudStorageSink *CloudStorageSink `json:"cloudStorageSink"`
	CreateTime       *string           `json:"createTime"`
	ExportOptions    *ExportOptions    `json:"exportOptions"`
	ID               *string           `json:"id"`
	MatterID         *string           `json:"matterId"`
	Name             *string           `json:"name"`
	Query            *Query            `json:"query"`
	Requester        *UserInfo         `json:"requester"`
	Stats            *ExportStats      `json:"stats"`
	Status           *ExportStatusEnum `json:"status"`
}
