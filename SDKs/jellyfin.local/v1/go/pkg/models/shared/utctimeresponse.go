package shared

import (
"time")

type UtcTimeResponse struct {
    RequestReceptionTime *time.Time `json:"RequestReceptionTime,omitempty"`
    ResponseTransmissionTime *time.Time `json:"ResponseTransmissionTime,omitempty"`
    
}

