package shared

type NonCompliantFile struct {
	DisplayCommand *string `json:"displayCommand"`
	Path           *string `json:"path"`
	Reason         *string `json:"reason"`
}
