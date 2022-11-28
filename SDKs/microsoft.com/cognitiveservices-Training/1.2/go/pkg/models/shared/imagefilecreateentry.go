package shared

type ImageFileCreateEntry struct {
	Contents *string  `json:"Contents,omitempty"`
	Name     *string  `json:"Name,omitempty"`
	TagIds   []string `json:"TagIds,omitempty"`
}
