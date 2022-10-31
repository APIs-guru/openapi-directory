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
	Errors      []StandardError              `json:"errors,omitempty"`
	Links       map[string]string            `json:"links,omitempty"`
	NumErrors   *int32                       `json:"numErrors,omitempty"`
	RequestedAt *time.Time                   `json:"requestedAt,omitempty"`
	Result      *File                        `json:"result,omitempty"`
	StartedAt   time.Time                    `json:"startedAt"`
	Status      FileActionResponseStatusEnum `json:"status"`
	TaskID      string                       `json:"taskId"`
}
