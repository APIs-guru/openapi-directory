package shared

type QueryResultEntry struct {
	File  *string `json:"file,omitempty"`
	Line  *int32  `json:"line,omitempty"`
	URL   *string `json:"url,omitempty"`
	Value *string `json:"value,omitempty"`
}
