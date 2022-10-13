package shared

type SegmentSettings struct {
	IndividualSegments *bool   `json:"individualSegments"`
	SegmentDuration    *string `json:"segmentDuration"`
}
