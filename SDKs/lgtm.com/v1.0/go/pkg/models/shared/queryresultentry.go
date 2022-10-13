package shared

type QueryResultEntry struct {
	File  *string `json:"file"`
	Line  *int32  `json:"line"`
	URL   *string `json:"url"`
	Value *string `json:"value"`
}
