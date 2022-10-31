package shared



type MuxStream struct {
    Container *string `json:"container,omitempty"`
    ElementaryStreams []string `json:"elementaryStreams,omitempty"`
    FileName *string `json:"fileName,omitempty"`
    Key *string `json:"key,omitempty"`
    SegmentSettings *SegmentSettings `json:"segmentSettings,omitempty"`
    
}

