package shared

type TransferJobStatusEnum string

const (
	TransferJobStatusEnumStatusUnspecified TransferJobStatusEnum = "STATUS_UNSPECIFIED"
	TransferJobStatusEnumEnabled           TransferJobStatusEnum = "ENABLED"
	TransferJobStatusEnumDisabled          TransferJobStatusEnum = "DISABLED"
	TransferJobStatusEnumDeleted           TransferJobStatusEnum = "DELETED"
)

// TransferJobInput
// This resource represents the configuration of a transfer job that runs periodically.
type TransferJobInput struct {
	Description         *string                `json:"description,omitempty"`
	LatestOperationName *string                `json:"latestOperationName,omitempty"`
	LoggingConfig       *LoggingConfig         `json:"loggingConfig,omitempty"`
	Name                *string                `json:"name,omitempty"`
	NotificationConfig  *NotificationConfig    `json:"notificationConfig,omitempty"`
	ProjectID           *string                `json:"projectId,omitempty"`
	Schedule            *Schedule              `json:"schedule,omitempty"`
	Status              *TransferJobStatusEnum `json:"status,omitempty"`
	TransferSpec        *TransferSpec          `json:"transferSpec,omitempty"`
}

// TransferJob
// This resource represents the configuration of a transfer job that runs periodically.
type TransferJob struct {
	CreationTime         *string                `json:"creationTime,omitempty"`
	DeletionTime         *string                `json:"deletionTime,omitempty"`
	Description          *string                `json:"description,omitempty"`
	LastModificationTime *string                `json:"lastModificationTime,omitempty"`
	LatestOperationName  *string                `json:"latestOperationName,omitempty"`
	LoggingConfig        *LoggingConfig         `json:"loggingConfig,omitempty"`
	Name                 *string                `json:"name,omitempty"`
	NotificationConfig   *NotificationConfig    `json:"notificationConfig,omitempty"`
	ProjectID            *string                `json:"projectId,omitempty"`
	Schedule             *Schedule              `json:"schedule,omitempty"`
	Status               *TransferJobStatusEnum `json:"status,omitempty"`
	TransferSpec         *TransferSpec          `json:"transferSpec,omitempty"`
}
