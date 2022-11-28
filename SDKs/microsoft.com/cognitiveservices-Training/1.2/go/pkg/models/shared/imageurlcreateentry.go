package shared

type ImageURLCreateEntry struct {
	TagIds []string `json:"TagIds,omitempty"`
	URL    *string  `json:"Url,omitempty"`
}
