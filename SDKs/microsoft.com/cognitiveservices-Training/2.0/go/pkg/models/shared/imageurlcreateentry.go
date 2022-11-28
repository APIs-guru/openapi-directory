package shared

type ImageURLCreateEntry struct {
	Regions []Region `json:"regions,omitempty"`
	TagIds  []string `json:"tagIds,omitempty"`
	URL     *string  `json:"url,omitempty"`
}
