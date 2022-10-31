package shared

import (
"time")


type ImportResponseStateEnum string

const (
    ImportResponseStateEnumImporting ImportResponseStateEnum = "IMPORTING"
ImportResponseStateEnumFinishedSuccess ImportResponseStateEnum = "FINISHED_SUCCESS"
ImportResponseStateEnumFinishedFailed ImportResponseStateEnum = "FINISHED_FAILED"
)


type ImportResponse struct {
    Created *time.Time `json:"created,omitempty"`
    ErrorMessage *string `json:"errorMessage,omitempty"`
    Finished *time.Time `json:"finished,omitempty"`
    Items *int64 `json:"items,omitempty"`
    State *ImportResponseStateEnum `json:"state,omitempty"`
    UUID *string `json:"uuid,omitempty"`
    
}

