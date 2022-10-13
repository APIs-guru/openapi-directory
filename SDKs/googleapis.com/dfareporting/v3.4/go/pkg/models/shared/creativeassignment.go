package shared

import (
	"time"
)

type CreativeAssignment struct {
	Active                     *bool                           `json:"active"`
	ApplyEventTags             *bool                           `json:"applyEventTags"`
	ClickThroughURL            *ClickThroughURL                `json:"clickThroughUrl"`
	CompanionCreativeOverrides []CompanionClickThroughOverride `json:"companionCreativeOverrides"`
	CreativeGroupAssignments   []CreativeGroupAssignment       `json:"creativeGroupAssignments"`
	CreativeID                 *string                         `json:"creativeId"`
	CreativeIDDimensionValue   *DimensionValue                 `json:"creativeIdDimensionValue"`
	EndTime                    *time.Time                      `json:"endTime"`
	RichMediaExitOverrides     []RichMediaExitOverride         `json:"richMediaExitOverrides"`
	Sequence                   *int32                          `json:"sequence"`
	SslCompliant               *bool                           `json:"sslCompliant"`
	StartTime                  *time.Time                      `json:"startTime"`
	Weight                     *int32                          `json:"weight"`
}
