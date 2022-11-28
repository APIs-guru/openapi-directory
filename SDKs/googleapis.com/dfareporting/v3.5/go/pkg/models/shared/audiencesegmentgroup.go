package shared

// AudienceSegmentGroup
// Audience Segment Group.
type AudienceSegmentGroup struct {
	AudienceSegments []AudienceSegment `json:"audienceSegments,omitempty"`
	ID               *string           `json:"id,omitempty"`
	Name             *string           `json:"name,omitempty"`
}
