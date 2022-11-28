package shared

// Position
// Position defines a position within a collection of data. The value can be either the end position, a key (used with ordered collections), a byte offset, or a record index.
type Position struct {
	ByteOffset      *string         `json:"byteOffset,omitempty"`
	ConcatPosition  *ConcatPosition `json:"concatPosition,omitempty"`
	End             *bool           `json:"end,omitempty"`
	Key             *string         `json:"key,omitempty"`
	RecordIndex     *string         `json:"recordIndex,omitempty"`
	ShufflePosition *string         `json:"shufflePosition,omitempty"`
}
