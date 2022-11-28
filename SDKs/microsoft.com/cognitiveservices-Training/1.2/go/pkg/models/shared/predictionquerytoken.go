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
	Application  *string                          `json:"Application,omitempty"`
	Continuation *string                          `json:"Continuation,omitempty"`
	EndTime      *time.Time                       `json:"EndTime,omitempty"`
	IterationID  *string                          `json:"IterationId,omitempty"`
	MaxCount     *int32                           `json:"MaxCount,omitempty"`
	OrderBy      *PredictionQueryTokenOrderByEnum `json:"OrderBy,omitempty"`
	Session      *string                          `json:"Session,omitempty"`
	StartTime    *time.Time                       `json:"StartTime,omitempty"`
}
