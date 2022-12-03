package shared

// TemporaryLinkV1
// A temporary link for a file, that lasts for 15 minutes.
type TemporaryLinkV1 struct {
	Link *string `json:"link,omitempty"`
}
