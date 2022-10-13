package shared

type MemoryInfoRepresentation struct {
	Free           *int64  `json:"free"`
	FreeFormated   *string `json:"freeFormated"`
	FreePercentage *int64  `json:"freePercentage"`
	Total          *int64  `json:"total"`
	TotalFormated  *string `json:"totalFormated"`
	Used           *int64  `json:"used"`
	UsedFormated   *string `json:"usedFormated"`
}
