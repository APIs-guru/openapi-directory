package shared

// MatchedURL
// A matched url in a Chat message. Chat apps can preview matched URLs. For more information, refer to [Preview links](https://developers.google.com/chat/how-tos/preview-links).
type MatchedURL struct {
	URL *string `json:"url,omitempty"`
}
