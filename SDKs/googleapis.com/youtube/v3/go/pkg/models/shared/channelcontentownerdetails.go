package shared

import (
"time")

type ChannelContentOwnerDetails struct {
    ContentOwner *string `json:"contentOwner,omitempty"`
    TimeLinked *time.Time `json:"timeLinked,omitempty"`
    
}

