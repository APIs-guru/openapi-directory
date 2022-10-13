package shared

type AudienceSegmentGroup struct {
	AudienceSegments []AudienceSegment `json:"audienceSegments"`
	ID               *string           `json:"id"`
	Name             *string           `json:"name"`
}
