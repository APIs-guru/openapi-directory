package shared

import (
	"time"
)

type ChannelContentOwnerDetails struct {
	ContentOwner *string    `json:"contentOwner"`
	TimeLinked   *time.Time `json:"timeLinked"`
}
