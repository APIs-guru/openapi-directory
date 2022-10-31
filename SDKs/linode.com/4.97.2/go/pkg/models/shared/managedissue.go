package shared

import (
"time")


type ManagedIssueEntityTypeEnum string

const (
    ManagedIssueEntityTypeEnumTicket ManagedIssueEntityTypeEnum = "ticket"
)


type ManagedIssueEntity struct {
    ID *int64 `json:"id,omitempty"`
    Label *string `json:"label,omitempty"`
    Type *ManagedIssueEntityTypeEnum `json:"type,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ManagedIssue struct {
    Created *time.Time `json:"created,omitempty"`
    Entity *ManagedIssueEntity `json:"entity,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Services []int64 `json:"services,omitempty"`
    
}

