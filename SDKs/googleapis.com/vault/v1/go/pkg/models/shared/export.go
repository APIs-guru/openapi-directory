package shared




type ExportStatusEnum string

const (
    ExportStatusEnumExportStatusUnspecified ExportStatusEnum = "EXPORT_STATUS_UNSPECIFIED"
ExportStatusEnumCompleted ExportStatusEnum = "COMPLETED"
ExportStatusEnumFailed ExportStatusEnum = "FAILED"
ExportStatusEnumInProgress ExportStatusEnum = "IN_PROGRESS"
)


type Export struct {
    CloudStorageSink *CloudStorageSink `json:"cloudStorageSink,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    ExportOptions *ExportOptions `json:"exportOptions,omitempty"`
    ID *string `json:"id,omitempty"`
    MatterID *string `json:"matterId,omitempty"`
    Name *string `json:"name,omitempty"`
    Query *Query `json:"query,omitempty"`
    Requester *UserInfo `json:"requester,omitempty"`
    Stats *ExportStats `json:"stats,omitempty"`
    Status *ExportStatusEnum `json:"status,omitempty"`
    
}

