package shared

type Position struct {
	ByteOffset      *string         `json:"byteOffset"`
	ConcatPosition  *ConcatPosition `json:"concatPosition"`
	End             *bool           `json:"end"`
	Key             *string         `json:"key"`
	RecordIndex     *string         `json:"recordIndex"`
	ShufflePosition *string         `json:"shufflePosition"`
}
