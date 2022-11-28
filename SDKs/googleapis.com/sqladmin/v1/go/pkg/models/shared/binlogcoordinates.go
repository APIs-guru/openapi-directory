package shared

// BinLogCoordinates
// Binary log coordinates.
type BinLogCoordinates struct {
	BinLogFileName *string `json:"binLogFileName,omitempty"`
	BinLogPosition *string `json:"binLogPosition,omitempty"`
	Kind           *string `json:"kind,omitempty"`
}
