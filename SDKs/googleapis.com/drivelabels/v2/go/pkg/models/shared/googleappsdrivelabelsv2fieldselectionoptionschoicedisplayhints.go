package shared

// GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints
// UI display hints for rendering an option.
type GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints struct {
	BadgeColors     *GoogleAppsDriveLabelsV2BadgeColors `json:"badgeColors,omitempty"`
	BadgePriority   *string                             `json:"badgePriority,omitempty"`
	DarkBadgeColors *GoogleAppsDriveLabelsV2BadgeColors `json:"darkBadgeColors,omitempty"`
	Disabled        *bool                               `json:"disabled,omitempty"`
	HiddenInSearch  *bool                               `json:"hiddenInSearch,omitempty"`
	ShownInApply    *bool                               `json:"shownInApply,omitempty"`
}
