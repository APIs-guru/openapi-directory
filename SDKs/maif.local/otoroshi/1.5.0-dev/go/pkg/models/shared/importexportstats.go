package shared

type ImportExportStats struct {
	Calls   int64 `json:"calls"`
	DataIn  int64 `json:"dataIn"`
	DataOut int64 `json:"dataOut"`
}
