package shared

import (
	"time"
)

type ChapterInfo struct {
	ImageDateModified  *time.Time `json:"ImageDateModified"`
	ImagePath          *string    `json:"ImagePath"`
	ImageTag           *string    `json:"ImageTag"`
	Name               *string    `json:"Name"`
	StartPositionTicks *int64     `json:"StartPositionTicks"`
}
