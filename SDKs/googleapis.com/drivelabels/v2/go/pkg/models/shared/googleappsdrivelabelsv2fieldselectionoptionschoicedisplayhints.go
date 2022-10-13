package shared

type GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints struct {
	BadgeColors     *GoogleAppsDriveLabelsV2BadgeColors `json:"badgeColors"`
	BadgePriority   *string                             `json:"badgePriority"`
	DarkBadgeColors *GoogleAppsDriveLabelsV2BadgeColors `json:"darkBadgeColors"`
	Disabled        *bool                               `json:"disabled"`
	HiddenInSearch  *bool                               `json:"hiddenInSearch"`
	ShownInApply    *bool                               `json:"shownInApply"`
}
