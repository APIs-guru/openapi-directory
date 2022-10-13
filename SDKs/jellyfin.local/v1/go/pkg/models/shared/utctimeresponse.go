package shared

import (
	"time"
)

type UtcTimeResponse struct {
	RequestReceptionTime     *time.Time `json:"RequestReceptionTime"`
	ResponseTransmissionTime *time.Time `json:"ResponseTransmissionTime"`
}
