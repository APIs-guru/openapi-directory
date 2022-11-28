package shared

// GoogleAppsCardV1SelectionItem
// A selectable item in a selection input, such as a check box or a switch.
type GoogleAppsCardV1SelectionItem struct {
	Selected *bool   `json:"selected,omitempty"`
	Text     *string `json:"text,omitempty"`
	Value    *string `json:"value,omitempty"`
}
