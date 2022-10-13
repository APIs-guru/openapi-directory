package shared

import (
	"time"
)

type ManagedIssueEntityTypeEnum string

const (
	ManagedIssueEntityTypeEnumTicket ManagedIssueEntityTypeEnum = "ticket"
)

type ManagedIssueEntity struct {
	ID    *int64                      `json:"id"`
	Label *string                     `json:"label"`
	Type  *ManagedIssueEntityTypeEnum `json:"type"`
	URL   *string                     `json:"url"`
}

type ManagedIssue struct {
	Created  *time.Time          `json:"created"`
	Entity   *ManagedIssueEntity `json:"entity"`
	ID       *int64              `json:"id"`
	Services []int64             `json:"services"`
}
