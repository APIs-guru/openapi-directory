package shared

import (
"time")

type PulseResponse struct {
    LearnerFirstName *string `json:"learnerFirstName,omitempty"`
    LearnerID *string `json:"learnerId,omitempty"`
    LearnerLastName *string `json:"learnerLastName,omitempty"`
    PulseBaseID *string `json:"pulseBaseId,omitempty"`
    PulseInstanceID *string `json:"pulseInstanceId,omitempty"`
    PulseQuestion *string `json:"pulseQuestion,omitempty"`
    PulseRunDurationMinutes *int64 `json:"pulseRunDurationMinutes,omitempty"`
    PulseRunStart *time.Time `json:"pulseRunStart,omitempty"`
    PulseType *string `json:"pulseType,omitempty"`
    Response *PulseAnswer `json:"response,omitempty"`
    ResponseTime *time.Time `json:"responseTime,omitempty"`
    
}

