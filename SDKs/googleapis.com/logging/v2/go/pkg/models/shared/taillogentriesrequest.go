package shared

type TailLogEntriesRequest struct {
	BufferWindow  *string  `json:"bufferWindow,omitempty"`
	Filter        *string  `json:"filter,omitempty"`
	ResourceNames []string `json:"resourceNames,omitempty"`
}
