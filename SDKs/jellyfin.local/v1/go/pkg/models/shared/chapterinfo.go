package shared

import (
	"time"
)

// ChapterInfo
// Class ChapterInfo.
type ChapterInfo struct {
	ImageDateModified  *time.Time `json:"ImageDateModified,omitempty"`
	ImagePath          *string    `json:"ImagePath,omitempty"`
	ImageTag           *string    `json:"ImageTag,omitempty"`
	Name               *string    `json:"Name,omitempty"`
	StartPositionTicks *int64     `json:"StartPositionTicks,omitempty"`
}
