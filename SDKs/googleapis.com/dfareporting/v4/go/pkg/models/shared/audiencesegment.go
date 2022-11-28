package shared

// AudienceSegment
// Audience Segment.
type AudienceSegment struct {
	Allocation *int32  `json:"allocation,omitempty"`
	ID         *string `json:"id,omitempty"`
	Name       *string `json:"name,omitempty"`
}
