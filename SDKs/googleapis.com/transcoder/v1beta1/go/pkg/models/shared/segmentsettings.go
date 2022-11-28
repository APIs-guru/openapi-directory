package shared

// SegmentSettings
// Segment settings for `"ts"`, `"fmp4"` and `"vtt"`.
type SegmentSettings struct {
	IndividualSegments *bool   `json:"individualSegments,omitempty"`
	SegmentDuration    *string `json:"segmentDuration,omitempty"`
}
