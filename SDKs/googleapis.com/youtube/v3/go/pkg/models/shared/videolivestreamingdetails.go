package shared

import (
	"time"
)

type VideoLiveStreamingDetails struct {
	ActiveLiveChatID   *string    `json:"activeLiveChatId"`
	ActualEndTime      *time.Time `json:"actualEndTime"`
	ActualStartTime    *time.Time `json:"actualStartTime"`
	ConcurrentViewers  *string    `json:"concurrentViewers"`
	ScheduledEndTime   *time.Time `json:"scheduledEndTime"`
	ScheduledStartTime *time.Time `json:"scheduledStartTime"`
}
