package shared

type TransferJobStatusEnum string

const (
	TransferJobStatusEnumStatusUnspecified TransferJobStatusEnum = "STATUS_UNSPECIFIED"
	TransferJobStatusEnumEnabled           TransferJobStatusEnum = "ENABLED"
	TransferJobStatusEnumDisabled          TransferJobStatusEnum = "DISABLED"
	TransferJobStatusEnumDeleted           TransferJobStatusEnum = "DELETED"
)

type TransferJob struct {
	CreationTime         *string                `json:"creationTime"`
	DeletionTime         *string                `json:"deletionTime"`
	Description          *string                `json:"description"`
	LastModificationTime *string                `json:"lastModificationTime"`
	LatestOperationName  *string                `json:"latestOperationName"`
	LoggingConfig        *LoggingConfig         `json:"loggingConfig"`
	Name                 *string                `json:"name"`
	NotificationConfig   *NotificationConfig    `json:"notificationConfig"`
	ProjectID            *string                `json:"projectId"`
	Schedule             *Schedule              `json:"schedule"`
	Status               *TransferJobStatusEnum `json:"status"`
	TransferSpec         *TransferSpec          `json:"transferSpec"`
}
