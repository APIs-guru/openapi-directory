package shared

// MuxStream
// Multiplexing settings for output stream.
type MuxStream struct {
	Container         *string          `json:"container,omitempty"`
	ElementaryStreams []string         `json:"elementaryStreams,omitempty"`
	Encryption        *Encryption      `json:"encryption,omitempty"`
	FileName          *string          `json:"fileName,omitempty"`
	Key               *string          `json:"key,omitempty"`
	SegmentSettings   *SegmentSettings `json:"segmentSettings,omitempty"`
}
