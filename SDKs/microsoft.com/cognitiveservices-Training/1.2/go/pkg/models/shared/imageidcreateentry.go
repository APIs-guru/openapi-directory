package shared

type ImageIDCreateEntry struct {
	ID     *string  `json:"Id,omitempty"`
	TagIds []string `json:"TagIds,omitempty"`
}
