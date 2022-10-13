package shared

import (
	"time"
)

type FileActionResponseStatusEnum string

const (
	FileActionResponseStatusEnumPending    FileActionResponseStatusEnum = "PENDING"
	FileActionResponseStatusEnumProcessing FileActionResponseStatusEnum = "PROCESSING"
	FileActionResponseStatusEnumCanceled   FileActionResponseStatusEnum = "CANCELED"
	FileActionResponseStatusEnumComplete   FileActionResponseStatusEnum = "COMPLETE"
)

type FileActionResponse struct {
	CompletedAt time.Time                    `json:"completedAt"`
	Errors      []StandardError              `json:"errors"`
	Links       map[string]string            `json:"links"`
	NumErrors   *int32                       `json:"numErrors"`
	RequestedAt *time.Time                   `json:"requestedAt"`
	Result      *File                        `json:"result"`
	StartedAt   time.Time                    `json:"startedAt"`
	Status      FileActionResponseStatusEnum `json:"status"`
	TaskID      string                       `json:"taskId"`
}
