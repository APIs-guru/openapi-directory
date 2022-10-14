package shared

type Position struct {
	ByteOffset      *string         `json:"byteOffset,omitempty"`
	ConcatPosition  *ConcatPosition `json:"concatPosition,omitempty"`
	End             *bool           `json:"end,omitempty"`
	Key             *string         `json:"key,omitempty"`
	RecordIndex     *string         `json:"recordIndex,omitempty"`
	ShufflePosition *string         `json:"shufflePosition,omitempty"`
}
