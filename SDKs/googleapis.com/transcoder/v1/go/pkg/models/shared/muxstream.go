package shared

type MuxStream struct {
	Container         *string          `json:"container"`
	ElementaryStreams []string         `json:"elementaryStreams"`
	FileName          *string          `json:"fileName"`
	Key               *string          `json:"key"`
	SegmentSettings   *SegmentSettings `json:"segmentSettings"`
}
