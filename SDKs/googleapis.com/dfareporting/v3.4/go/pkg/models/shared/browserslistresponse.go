package shared

type BrowsersListResponse struct {
	Browsers []Browser `json:"browsers"`
	Kind     *string   `json:"kind"`
}
