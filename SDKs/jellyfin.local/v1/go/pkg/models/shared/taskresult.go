package shared

import (
	"time"
)

type TaskResult struct {
	EndTimeUtc       *time.Time                `json:"EndTimeUtc,omitempty"`
	ErrorMessage     *string                   `json:"ErrorMessage,omitempty"`
	ID               *string                   `json:"Id,omitempty"`
	Key              *string                   `json:"Key,omitempty"`
	LongErrorMessage *string                   `json:"LongErrorMessage,omitempty"`
	Name             *string                   `json:"Name,omitempty"`
	StartTimeUtc     *time.Time                `json:"StartTimeUtc,omitempty"`
	Status           *TaskCompletionStatusEnum `json:"Status,omitempty"`
}
