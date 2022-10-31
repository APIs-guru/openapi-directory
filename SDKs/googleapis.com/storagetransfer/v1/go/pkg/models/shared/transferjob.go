package shared




type TransferJobStatusEnum string

const (
    TransferJobStatusEnumStatusUnspecified TransferJobStatusEnum = "STATUS_UNSPECIFIED"
TransferJobStatusEnumEnabled TransferJobStatusEnum = "ENABLED"
TransferJobStatusEnumDisabled TransferJobStatusEnum = "DISABLED"
TransferJobStatusEnumDeleted TransferJobStatusEnum = "DELETED"
)


type TransferJob struct {
    CreationTime *string `json:"creationTime,omitempty"`
    DeletionTime *string `json:"deletionTime,omitempty"`
    Description *string `json:"description,omitempty"`
    LastModificationTime *string `json:"lastModificationTime,omitempty"`
    LatestOperationName *string `json:"latestOperationName,omitempty"`
    LoggingConfig *LoggingConfig `json:"loggingConfig,omitempty"`
    Name *string `json:"name,omitempty"`
    NotificationConfig *NotificationConfig `json:"notificationConfig,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    Schedule *Schedule `json:"schedule,omitempty"`
    Status *TransferJobStatusEnum `json:"status,omitempty"`
    TransferSpec *TransferSpec `json:"transferSpec,omitempty"`
    
}

