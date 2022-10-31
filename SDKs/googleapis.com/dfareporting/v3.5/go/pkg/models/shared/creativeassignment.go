package shared

import (
	"time"
)

type CreativeAssignment struct {
	Active                     *bool                           `json:"active,omitempty"`
	ApplyEventTags             *bool                           `json:"applyEventTags,omitempty"`
	ClickThroughURL            *ClickThroughURL                `json:"clickThroughUrl,omitempty"`
	CompanionCreativeOverrides []CompanionClickThroughOverride `json:"companionCreativeOverrides,omitempty"`
	CreativeGroupAssignments   []CreativeGroupAssignment       `json:"creativeGroupAssignments,omitempty"`
	CreativeID                 *string                         `json:"creativeId,omitempty"`
	CreativeIDDimensionValue   *DimensionValue                 `json:"creativeIdDimensionValue,omitempty"`
	EndTime                    *time.Time                      `json:"endTime,omitempty"`
	RichMediaExitOverrides     []RichMediaExitOverride         `json:"richMediaExitOverrides,omitempty"`
	Sequence                   *int32                          `json:"sequence,omitempty"`
	SslCompliant               *bool                           `json:"sslCompliant,omitempty"`
	StartTime                  *time.Time                      `json:"startTime,omitempty"`
	Weight                     *int32                          `json:"weight,omitempty"`
}
