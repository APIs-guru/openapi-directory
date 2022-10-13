package shared

import (
	"time"
)

type TaskResult struct {
	EndTimeUtc       *time.Time                `json:"EndTimeUtc"`
	ErrorMessage     *string                   `json:"ErrorMessage"`
	ID               *string                   `json:"Id"`
	Key              *string                   `json:"Key"`
	LongErrorMessage *string                   `json:"LongErrorMessage"`
	Name             *string                   `json:"Name"`
	StartTimeUtc     *time.Time                `json:"StartTimeUtc"`
	Status           *TaskCompletionStatusEnum `json:"Status"`
}
