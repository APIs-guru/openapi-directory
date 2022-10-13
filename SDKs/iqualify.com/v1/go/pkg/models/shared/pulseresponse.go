package shared

import (
	"time"
)

type PulseResponse struct {
	LearnerFirstName        *string      `json:"learnerFirstName"`
	LearnerID               *string      `json:"learnerId"`
	LearnerLastName         *string      `json:"learnerLastName"`
	PulseBaseID             *string      `json:"pulseBaseId"`
	PulseInstanceID         *string      `json:"pulseInstanceId"`
	PulseQuestion           *string      `json:"pulseQuestion"`
	PulseRunDurationMinutes *int64       `json:"pulseRunDurationMinutes"`
	PulseRunStart           *time.Time   `json:"pulseRunStart"`
	PulseType               *string      `json:"pulseType"`
	Response                *PulseAnswer `json:"response"`
	ResponseTime            *time.Time   `json:"responseTime"`
}
