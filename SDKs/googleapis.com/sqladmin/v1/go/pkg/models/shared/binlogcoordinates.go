package shared

type BinLogCoordinates struct {
	BinLogFileName *string `json:"binLogFileName"`
	BinLogPosition *string `json:"binLogPosition"`
	Kind           *string `json:"kind"`
}
