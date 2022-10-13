package shared

import (
	"time"
)

type ImportResponseStateEnum string

const (
	ImportResponseStateEnumImporting       ImportResponseStateEnum = "IMPORTING"
	ImportResponseStateEnumFinishedSuccess ImportResponseStateEnum = "FINISHED_SUCCESS"
	ImportResponseStateEnumFinishedFailed  ImportResponseStateEnum = "FINISHED_FAILED"
)

type ImportResponse struct {
	Created      *time.Time               `json:"created"`
	ErrorMessage *string                  `json:"errorMessage"`
	Finished     *time.Time               `json:"finished"`
	Items        *int64                   `json:"items"`
	State        *ImportResponseStateEnum `json:"state"`
	UUID         *string                  `json:"uuid"`
}
