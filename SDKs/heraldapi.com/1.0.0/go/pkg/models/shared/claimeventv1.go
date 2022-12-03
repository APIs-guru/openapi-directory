package shared

import (
	"time"
)

// ClaimEventV1
// A claim event describes an event that either was a filed claim or would have warranted a claim if the customer had coverage at the time. `claim_event` can be the [`input_type`](https://www.heraldapi.com/docs/input-types) of a parameter on an [application](https://www.heraldapi.com/docs/application).
type ClaimEventV1 struct {
	Amount      float64   `json:"amount"`
	Date        time.Time `json:"date"`
	Description *string   `json:"description,omitempty"`
}
