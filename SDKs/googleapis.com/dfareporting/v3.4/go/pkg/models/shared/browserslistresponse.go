package shared

// BrowsersListResponse
// Browser List Response
type BrowsersListResponse struct {
	Browsers []Browser `json:"browsers,omitempty"`
	Kind     *string   `json:"kind,omitempty"`
}
