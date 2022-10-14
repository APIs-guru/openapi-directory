package shared

type GoogleAppsCardV1SelectionItem struct {
	Selected *bool   `json:"selected,omitempty"`
	Text     *string `json:"text,omitempty"`
	Value    *string `json:"value,omitempty"`
}
