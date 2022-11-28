package shared

import (
	"time"
)

// VideoLiveStreamingDetails
// Details about the live streaming metadata.
type VideoLiveStreamingDetails struct {
	ActiveLiveChatID   *string    `json:"activeLiveChatId,omitempty"`
	ActualEndTime      *time.Time `json:"actualEndTime,omitempty"`
	ActualStartTime    *time.Time `json:"actualStartTime,omitempty"`
	ConcurrentViewers  *string    `json:"concurrentViewers,omitempty"`
	ScheduledEndTime   *time.Time `json:"scheduledEndTime,omitempty"`
	ScheduledStartTime *time.Time `json:"scheduledStartTime,omitempty"`
}
