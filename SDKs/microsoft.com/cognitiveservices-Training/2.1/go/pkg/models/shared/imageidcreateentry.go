package shared

type ImageIDCreateEntry struct {
	ID      *string  `json:"id,omitempty"`
	Regions []Region `json:"regions,omitempty"`
	TagIds  []string `json:"tagIds,omitempty"`
}
