package shared

import (
	"time"
)

type PredictionQueryTokenOrderByEnum string

const (
	PredictionQueryTokenOrderByEnumNewest    PredictionQueryTokenOrderByEnum = "Newest"
	PredictionQueryTokenOrderByEnumOldest    PredictionQueryTokenOrderByEnum = "Oldest"
	PredictionQueryTokenOrderByEnumSuggested PredictionQueryTokenOrderByEnum = "Suggested"
)

type PredictionQueryToken struct {
	Application  *string                          `json:"application,omitempty"`
	Continuation *string                          `json:"continuation,omitempty"`
	EndTime      *time.Time                       `json:"endTime,omitempty"`
	IterationID  *string                          `json:"iterationId,omitempty"`
	MaxCount     *int32                           `json:"maxCount,omitempty"`
	OrderBy      *PredictionQueryTokenOrderByEnum `json:"orderBy,omitempty"`
	Session      *string                          `json:"session,omitempty"`
	StartTime    *time.Time                       `json:"startTime,omitempty"`
}
