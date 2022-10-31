package shared

import (
	"time"
)

type FolderActionResponseStatusEnum string

const (
	FolderActionResponseStatusEnumPending    FolderActionResponseStatusEnum = "PENDING"
	FolderActionResponseStatusEnumProcessing FolderActionResponseStatusEnum = "PROCESSING"
	FolderActionResponseStatusEnumCanceled   FolderActionResponseStatusEnum = "CANCELED"
	FolderActionResponseStatusEnumComplete   FolderActionResponseStatusEnum = "COMPLETE"
)

type FolderActionResponse struct {
	CompletedAt time.Time                      `json:"completedAt"`
	Errors      []StandardError                `json:"errors,omitempty"`
	Links       map[string]string              `json:"links,omitempty"`
	NumErrors   *int32                         `json:"numErrors,omitempty"`
	RequestedAt *time.Time                     `json:"requestedAt,omitempty"`
	Result      *Folder                        `json:"result,omitempty"`
	StartedAt   time.Time                      `json:"startedAt"`
	Status      FolderActionResponseStatusEnum `json:"status"`
	TaskID      string                         `json:"taskId"`
}
