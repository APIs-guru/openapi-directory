package shared

type GoogleAppsCardV1SelectionItem struct {
	Selected *bool   `json:"selected"`
	Text     *string `json:"text"`
	Value    *string `json:"value"`
}
