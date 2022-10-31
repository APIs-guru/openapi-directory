package shared

type Range struct {
	EndIndex   *int32  `json:"endIndex,omitempty"`
	SegmentID  *string `json:"segmentId,omitempty"`
	StartIndex *int32  `json:"startIndex,omitempty"`
}
