package shared

type Notice struct {
	Description []string `json:"description"`
	Links       []Link   `json:"links"`
	Title       *string  `json:"title"`
	Type        *string  `json:"type"`
}
