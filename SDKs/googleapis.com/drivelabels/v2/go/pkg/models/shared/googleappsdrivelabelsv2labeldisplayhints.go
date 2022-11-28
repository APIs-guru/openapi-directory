package shared

// GoogleAppsDriveLabelsV2LabelDisplayHints
// UI display hints for rendering the label.
type GoogleAppsDriveLabelsV2LabelDisplayHints struct {
	Disabled       *bool   `json:"disabled,omitempty"`
	HiddenInSearch *bool   `json:"hiddenInSearch,omitempty"`
	Priority       *string `json:"priority,omitempty"`
	ShownInApply   *bool   `json:"shownInApply,omitempty"`
}
