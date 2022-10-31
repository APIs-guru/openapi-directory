package shared

import (
	"time"
)

type MarketingEventCompleteRequestParams struct {
	EndDateTime   time.Time `json:"endDateTime"`
	StartDateTime time.Time `json:"startDateTime"`
}
