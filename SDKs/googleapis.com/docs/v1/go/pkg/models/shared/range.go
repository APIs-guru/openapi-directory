package shared

type Range struct {
	EndIndex   *int32  `json:"endIndex"`
	SegmentID  *string `json:"segmentId"`
	StartIndex *int32  `json:"startIndex"`
}
