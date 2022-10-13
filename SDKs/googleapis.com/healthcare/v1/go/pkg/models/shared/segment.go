package shared

type Segment struct {
	Fields    map[string]string `json:"fields"`
	SegmentID *string           `json:"segmentId"`
	SetID     *string           `json:"setId"`
}
