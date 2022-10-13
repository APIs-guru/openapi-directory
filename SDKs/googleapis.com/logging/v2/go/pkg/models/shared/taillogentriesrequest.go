package shared

type TailLogEntriesRequest struct {
	BufferWindow  *string  `json:"bufferWindow"`
	Filter        *string  `json:"filter"`
	ResourceNames []string `json:"resourceNames"`
}
