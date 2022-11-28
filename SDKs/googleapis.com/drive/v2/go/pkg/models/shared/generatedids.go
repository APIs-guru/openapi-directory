package shared

// GeneratedIds
// A list of generated IDs which can be provided in insert requests
type GeneratedIds struct {
	Ids   []string `json:"ids,omitempty"`
	Kind  *string  `json:"kind,omitempty"`
	Space *string  `json:"space,omitempty"`
}
