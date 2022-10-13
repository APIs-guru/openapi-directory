package shared

type CopyLogEntriesRequest struct {
	Destination *string `json:"destination"`
	Filter      *string `json:"filter"`
	Name        *string `json:"name"`
}
