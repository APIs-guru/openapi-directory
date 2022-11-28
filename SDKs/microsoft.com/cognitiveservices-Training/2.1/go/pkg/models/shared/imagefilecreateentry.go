package shared

type ImageFileCreateEntry struct {
	Contents *string  `json:"contents,omitempty"`
	Name     *string  `json:"name,omitempty"`
	Regions  []Region `json:"regions,omitempty"`
	TagIds   []string `json:"tagIds,omitempty"`
}
