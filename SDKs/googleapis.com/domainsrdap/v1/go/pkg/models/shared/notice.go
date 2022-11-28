package shared

// Notice
// Notices object defined in [section 4.3 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-4.3).
type Notice struct {
	Description []string `json:"description,omitempty"`
	Links       []Link   `json:"links,omitempty"`
	Title       *string  `json:"title,omitempty"`
	Type        *string  `json:"type,omitempty"`
}
