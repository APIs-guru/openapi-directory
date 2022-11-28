package shared

import (
	"time"
)

// UtcTimeResponse
// Class UtcTimeResponse.
type UtcTimeResponse struct {
	RequestReceptionTime     *time.Time `json:"RequestReceptionTime,omitempty"`
	ResponseTransmissionTime *time.Time `json:"ResponseTransmissionTime,omitempty"`
}
