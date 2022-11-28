package shared

import (
	"time"
)

// ChannelContentOwnerDetails
// The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel.
type ChannelContentOwnerDetails struct {
	ContentOwner *string    `json:"contentOwner,omitempty"`
	TimeLinked   *time.Time `json:"timeLinked,omitempty"`
}
