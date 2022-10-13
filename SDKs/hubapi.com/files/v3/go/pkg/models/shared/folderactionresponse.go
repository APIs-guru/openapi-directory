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
	Errors      []StandardError                `json:"errors"`
	Links       map[string]string              `json:"links"`
	NumErrors   *int32                         `json:"numErrors"`
	RequestedAt *time.Time                     `json:"requestedAt"`
	Result      *Folder                        `json:"result"`
	StartedAt   time.Time                      `json:"startedAt"`
	Status      FolderActionResponseStatusEnum `json:"status"`
	TaskID      string                         `json:"taskId"`
}
