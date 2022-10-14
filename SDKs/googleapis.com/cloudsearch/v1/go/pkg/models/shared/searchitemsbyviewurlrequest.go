package shared

type SearchItemsByViewURLRequest struct {
	DebugOptions *DebugOptions `json:"debugOptions,omitempty"`
	PageToken    *string       `json:"pageToken,omitempty"`
	ViewURL      *string       `json:"viewUrl,omitempty"`
}
